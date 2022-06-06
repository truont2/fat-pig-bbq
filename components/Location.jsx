import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
import styles from "../styles/Location.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

//TODO: Render map and Hours of Op in the grid below.
export default function Location() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue"].join(","),
    },
  });

  return (
    <div className={styles.location}>
      <ThemeProvider theme={theme}>
            <Typography align="center" variant="h1">
              Location
            </Typography>
          
      <MapWithNoSSR />
      <Typography align="center" variant="h3">
              Hours
            </Typography>
      <ul className={styles.hours}>
        <li className={styles.li}>Sunday: Closed</li>
        <li className={styles.li}>Monday-Thursday: 11am-7:30pm</li>
        <li className={styles.li}>Friday-Saturday: 11am-8pm</li>
      </ul>
      {/* <Grid
      container
        rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={8} md={6}>
          <div className={styles.map}>
            
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
      </Grid> */}
      </ThemeProvider>
    </div>
  );
}
