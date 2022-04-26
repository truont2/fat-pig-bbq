import React from "react";
import Map from "./Map";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//TODO: Render map and Hours of Op in the grid below.
export default function Location() {
  return (
    <div>
      {/* <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid> */}
      <h2>Location</h2>
      <div>Hours</div>
      <div>
        <Map />
      </div>
    </div>
  );
}
