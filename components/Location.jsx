import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
import styles from "../styles/Location.module.css";

//TODO: Render map and Hours of Op in the grid below.
export default function Location() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <div className={styles.location}>
      <h2>Location</h2>
      <MapWithNoSSR />
      <h2>Hours</h2>
      <ul className={styles.hours}>
        <li>Sunday: Closed</li>
        <li>Monday-Thursday: 11am-7:30pm</li>
        <li>Friday-Saturday: 11am-8pm</li>
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
    </div>
  );
}
