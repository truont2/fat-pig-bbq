import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";

//TODO: Render map and Hours of Op in the grid below.
export default function Location() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <div>
      <h2>Location</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}  md={6}>
          <div><MapWithNoSSR /></div>
        </Grid>
        <Grid item xs={12}  md={6}>
          <div id="map">
            <h3>Hours</h3>
            <div>
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
