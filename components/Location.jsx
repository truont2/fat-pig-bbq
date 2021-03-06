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
export default function Location({data}) {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue"].join(","),
    },
  });
  // moment(time, "HH:mm:ss").format("hh:mm A")
  return (
    <div className={styles.location}>
      <ThemeProvider theme={theme}>
        <Typography align="center" variant="h1">
          Location
        </Typography>
        <div>
          <h4>{data.address}</h4>
        </div>

        <MapWithNoSSR />
        <Typography align="center" variant="h3">
          Hours
        </Typography>
        <ul className={styles.hours}>
          <li className={styles.li}>Sunday: Closed</li>
          <li className={styles.li}>Monday–Thursday: {data.weekdayStart}AM – {data.WeekdayEnd}PM</li>
          <li className={styles.li}>Friday–Saturday: {data.weekendStart}AM – {data.weekendEnd}PM</li>
        </ul>
      </ThemeProvider>
    </div>
  );
}
