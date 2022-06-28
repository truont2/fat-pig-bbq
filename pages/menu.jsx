import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import styles from "../styles/Menu.module.css";
import Grid from "@mui/material/Grid";
import { fetcher } from "../lib/api";
import { menuItemClasses } from "@mui/material";

import useSWR from "swr";

export default function menu({ menuItems }) {
  // slug data
  // slug is a parameter that can change based on what is passed into the url
  // use data for the application instead
  // use swr so we can enable pagination so if we dont need it, get rid
  // const [pageIndex, setPageIndex] = useState(1);
  // const { data } = useSWR(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/menu-items?pagination[page]=${pageIndex}&pagination[pageSize]=5`,
  //   fetcher,
  //   {
  //     fallbackData: menuItems,
  //   }
  // );

  // do server side rendering
  const theme = useTheme();

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <h4>View PDF version</h4>
        <h2
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: 100,
            fontSize: "30px",
          }}
        >
          {" "}
          Meals{" "}
        </h2>
        <Grid
          container
          direction="row"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {menuItems.data.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Card sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant="h5"
                        style={{
                          fontFamily: "Bebas Neue",
                          fontWeight: 100,
                          fontSize: "22px",
                        }}
                      >
                        {item.attributes.name}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Bebas Neue",
                          fontWeight: 100,
                          fontSize: "20px",
                        }}
                      >
                        ${item.attributes.price}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Bebas Neue",
                          fontWeight: 100,
                          fontSize: "15px",
                        }}
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {item.attributes.description}
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={"http://localhost:1337" + item.attributes.image.data.attributes.url}
                    alt="Item"
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <h2
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: 100,
            fontSize: "30px",
          }}
        >
          {" "}
          Sides{" "}
        </h2>
        <Grid></Grid>
        <h2
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: 100,
            fontSize: "30px",
          }}
        >
          {" "}
          Beverages{" "}
        </h2>
        <Grid></Grid>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // const res = await axios.get("http://localhost:3000/api/menu");

  // const menuItems = await await fetcher(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/menu-items?pagination[page]=1&pagination[pageSize]=5`
  // );
  const menuItems = await await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/menu-items?populate=*`
  );
  console.log(menuItems, "menuItemClasses");
  return {
    props: {
      menuItems: menuItems,
    },
  };
};
