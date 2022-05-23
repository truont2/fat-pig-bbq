import axios from "axios";
import React, { useEffect, useState } from "react";
// import MenuItem from '../components/MenuItem';
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function menu({ menuItems }) {
  // do server side rendering
  console.log(menuItems);
  return (
    <div>
      {/* {menuItems.map((item, index) => {
        return <MenuItem item={item} /> 
      })} */}
            <h1>{menuItems[0].title}</h1>
      <h1>{menuItems[0].title}</h1>
      <h1>{menuItems[0].title}</h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div>
              <Image src={menuItems[0].img} width="80" height="80"></Image>
              <div>hello</div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Image src={menuItems[0].img} width="80" height="80"></Image>
              <div>hello</div>
            </div>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/menu");
  return {
    props: {
      menuItems: res.data,
    },
  };
};
