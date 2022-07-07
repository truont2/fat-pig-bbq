import { useRouter } from "next/router"
import Hero from "./sections/hero"
// import LargeVideo from "./sections/large-video"
import FeatureColumnsGroup from "./sections/feature-columns-group"
// import FeatureRowsGroup from "./sections/feature-rows-group"
// import BottomActions from "./sections/bottom-actions"
// import TestimonialsGroup from "./sections/testimonials-group"
// import RichText from "./sections/rich-text"
// import Pricing from "./sections/pricing"
// import LeadForm from "./sections/lead-form"

// Map Strapi sections to section components
const sectionComponents = {
  ComponentSectionsHero: Hero,
//   ComponentSectionsLargeVideo: LargeVideo,
  ComponentSectionsFeatureColumnsGroup: FeatureColumnsGroup,
//   ComponentSectionsFeatureRowsGroup: FeatureRowsGroup,
//   ComponentSectionsBottomActions: BottomActions,
//   ComponentSectionsTestimonialsGroup: TestimonialsGroup,
//   ComponentSectionsRichText: RichText,
//   ComponentSectionsPricing: Pricing,
//   ComponentSectionsLeadForm: LeadForm,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  console.log(sectionData.SectionName, "supposed type name");
  const SectionComponent = sectionComponents[sectionData.SectionName]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  )
}

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.SectionName}${section.id}`}
        />
      ))}
    </div>
  )
}

export default Sections