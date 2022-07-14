import classNames from "classnames";
import NextImage from "../elements/image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";
import styles from "../../styles/featureRowGroup.module.css";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const FeatureRowsGroup = ({ data }) => {
  const length = 10,
    breadth = 20;
  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue"].join(","),
    },
  });
  return (
    <div className={styles.container}>
      <CssBaseline />
      {data.features.map((feature, index) => (
        <div className={styles.feature} key={feature.id}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 8, md: 12 }}
            className={index == 0 ? styles.section : styles.section1}
          >
            <Grid item xs={8} md={6} className={styles.border}>
              {/* Text section */}
              <div>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3">{feature.title}</Typography>
                </ThemeProvider>
                <Typography my={2}>
                    {feature.description}
                  </Typography>
                <CustomLink link={feature.link}>
                  <div className={styles.text}>
                    {feature.link.text} <ArrowForwardOutlinedIcon />
                  </div>
                </CustomLink>
              </div>
            </Grid>

            {/* Media section */}
            <Grid item xs={8} md={6}>
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
