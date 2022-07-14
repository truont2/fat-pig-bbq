import NextImage from "../elements/image"
import styles from '../../styles/FeatureColumn.module.css';
import { serializeStyles } from "@emotion/serialize";

const FeatureColumnsGroup = ({ data }) => {
  return (
    // "container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12"
    <div className={styles.container}>
      {data.features.map((feature) => (
        <div className={styles.section} key={feature.id}>
          <div className={styles.image}>
            <NextImage media={feature.icon} width={200} height={100}/>
          </div>
          <h3 className="font-bold mt-4 mb-4">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureColumnsGroup
