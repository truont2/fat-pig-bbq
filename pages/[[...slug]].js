// import delve from "dlv";
// import { getDataDependencies } from "../pages/services/api";
// import { redirectToHomepage, getData } from "../utils";
// import { getLocalizedParams } from "../utils/localize";

// const Universals = ({ pageData }) => {
//   const blocks = delve(pageData, "blocks");
//   return <div></div>;
// };

// export async function getServerSideProps(context) {
//   const { slug, locale } = getLocalizedParams(context.query);
//   try {
//     const data = getData(slug, locale);
//     console.log(data);
//     const res = await fetch(delve(data, "data"));
//     const json = await res.json();
//     console.log(json, "json data");
//     if (!json.length) {
//       return redirectToHomepage();
//     }
//     const pageData = await getDataDependencies(delve(json, "0"));
//     console.log(pageData, "page data");
//     return {
//       props: { pageData },
//     };
//   } catch (error) {
//     return redirectToHomepage();
//   }
// }
// export default Universals;
// https://medium.com/strapi/how-to-create-pages-on-the-fly-with-dynamic-zone-8eebe64a2e1

import Link from "next/link";
import { getPageData, fetchAPI, getGlobalData } from "../utils/api";
import qs from "qs";
import { getLocalizedPaths } from "../utils/localize";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Sections from "../components/section";
import Seo from "../components/elements/seo";
import Layout from "../components/layout";

export default function DynamicPage({
  sections,
  metadata,
  preview,
  global,
  pageContext,
}) {
  const router = useRouter();

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    // return <ErrorPage statusCode={404} />;
    return <h1>broken</h1>
  }

  
  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

    // Merge default site SEO settings with page specific SEO settings
    if (metadata.shareImage?.data == null) {
      delete metadata.shareImage
    }
    const metadataWithDefaults = {
      ...global.attributes.metadata,
      ...metadata,
    }

  return (
    <div style={{ margin: "100px auto", background: "white", paddingBottom: "50px"}}>
    {/* <Seo metadata={metadataWithDefaults} /> */}
    <Sections sections={sections} preview={preview} />
    <Layout global={global} pageContext={pageContext}>
      <h1>layout section</h1>
    </Layout>
    </div>
  );
}

// tell next.js how many pages there are
export async function getStaticPaths(context) {
  console.log(context, "context");
  // attempt to work on the multiple lanugauage part
  const pages = await context.locales.reduce(
    async (currentPagesPromise, locale) => {
      // function runs twice for the number of locals present 2x for en and fr
      const currentPages = await currentPagesPromise;
      const localePages = await fetchAPI("/pages", {
        locale,
        fields: ["slug", "locale"],
      });
      return [...currentPages, ...localePages.data];
    },
    Promise.resolve([])
  );
  // console.log(languages, "pages that should be created");
  // const res = await fetch("http://localhost:1337/api/pages?populate=deep");
  // const pages = await res.json();
  //   works for just english to get the results we want
  console.log(pages, "pages. fat pig");
  const paths = pages.map((page) => {
    const { slug, locale } = page.attributes;
    const slugArray = !slug ? false : slug.split("/");
    return {
      params: { slug: slugArray },
      locale,
    };
  });
  console.log(paths, "fatpig");
  return {
    paths,
    fallback: true,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;
  //  fetch by slug
  // ?filters[slug]=my-article-slug
  // ?filters[slug][$eq]=my-article-slug
  // http://localhost:1337/api/pages?filters\[Slug\][$eq]=&[populate]=deep
  const globalLocale = await getGlobalData(locale);
  console.log(globalLocale, "global Locale")
  // getting local data for page
  console.log(params.slug);
  const slugString = (!params.slug ? ["homepage"] : params.slug).join("/");
  console.log(slugString, "slug");
  console.log(
    `http://localhost:1337/api/pages?filters[slug][$eq]=${slugString}&[populate]=deep`,
    "fetch request"
  );
  const res = await fetch(
    `http://localhost:1337/api/pages?filters[slug][$eq]=${slugString}&[populate]=deep`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
  );
  const data = await res.json();
  console.log(data, "page data =======");
  const pageData = data.data[0];
  console.log(pageData, "==========");
  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} };
  }

  const { contentSections, metadata, localizations, slug } =
    pageData.attributes;

  const pageContext = {
    locale,
    locales,
    defaultLocale,
    slug,
    localizations,
  };

  const localizedPaths = getLocalizedPaths(pageContext);
  console.log("---------", localizedPaths);
  return {
    props: {
      preview,
      sections: contentSections,
      metadata,
      global: globalLocale,
      pageContext: {
        ...pageContext,
        localizedPaths,
      },
    },
  };
}
