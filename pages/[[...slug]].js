import Link from "next/link";
import { getPageData, fetchAPI, getGlobalData } from "../utils/api";
import qs from "qs"

export default function DynamicPage({ post }) {
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>{post.Title}</h2>
    </div>
  );
}

// tell next.js how many pages there are
export async function getStaticPaths(context) {
    console.log(context, "context");
    // attempt to work on the multiple lanugauage part
    const languages = await context.locales.reduce(
        async (currentPagesPromise, locale) => {
          // function runs twice for the number of locals present 2x for en and fr
          const currentPages = await currentPagesPromise
          const localePages = await fetchAPI("/pages", {
            locale,
            fields: ["slug", "locale"],
          })
          return [...currentPages, ...localePages.data]
        },
        Promise.resolve([])
      )
      console.log(languages);
  const res = await fetch("http://localhost:1337/api/pages?populate=deep");
  const pages = await res.json();
//   works for just english to get the results we want
    console.log(pages, "pages. fat pig");
  const paths = pages.data.map((page)=> {
    const {slug, locale} = page.attributes;
    const slugArray = !slug ? false : slug.split("/");
    return {
        params: {slug: slugArray}, 
        locale
    }
  })
  console.log(paths, "fatpig");
  return {
    paths,
    fallback: true,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps(context) {
    const { params, locale, locales, defaultLocale } = context;
//  fetch by slug
// ?filters[slug]=my-article-slug
// ?filters[slug][$eq]=my-article-slug
// http://localhost:1337/api/pages?filters[slug][$eq]=${slug}&[populate]=deep
    

    // getting local data for page
  const slugString = !params.slug ? [""] : params.slug;
  const res = await fetch(`http://localhost:1337/api/pages?filters[slug][$eq]=${slugString}&[populate]=deep`);
  const data = await res.json();
  const pageData = data[0];
    
  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  const { contentSections, metadata, localizations, slug } = pageData.attributes

  const pageContext = {
    locale,
    locales,
    defaultLocale,
    slug,
    localizations,
  }
  
  return {
    props: { post },
  };
}