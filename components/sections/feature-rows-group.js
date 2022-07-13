import classNames from "classnames";
import NextImage from "../elements/image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";
import styles from "../../styles/featureRowGroup.module.css";
import Grid from "@mui/material/Grid";
import { style } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

const FeatureRowsGroup = ({ data }) => {
  const length = 10,
    breadth = 20;
  return (
    <div className={styles.container}>
      <CssBaseline />
      {data.features.map((feature, index) => (
        <div className={styles.feature} key={feature.id}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className={index == 0 ? styles.section : styles.section1}
          >
            <Grid item xs={8} md={7} className={styles.border}>
              {/* Text section */}
              <div className="w-full lg:w-6/12 lg:pr-6 text-lg">
                <h3 className="title">{feature.title}</h3>
                <p className="my-6">{feature.description}</p>
                <CustomLink link={feature.link}>
                  <div className="text-blue-600 with-arrow hover:underline">
                    {feature.link.text}
                  </div>
                </CustomLink>
              </div>
            </Grid>

            {/* Media section */}
            <Grid item xs={8} md={4}>
              {/* "w-full sm:9/12 lg:w-4/12 max-h-full" */}
              <div className={styles.image}>
                {/* Images */}
                {feature.media.data.attributes.mime.startsWith("image") && (
                  <div className={styles.image}>
                    <NextImage media={feature.media} />
                  </div>
                )}

                {/* Videos */}
                {feature.media.data.attributes.mime.startsWith("video") && (
                  <Video
                    media={feature.media}
                    className="w-full h-auto"
                    autoPlay
                    controls={false}
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default FeatureRowsGroup;
