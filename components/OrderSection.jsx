import React from "react";
import styles from "../styles/OrderSection.module.css";
import { OrderCard } from "../components/OrderCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image1 from "../public/assets/fatpig.png";

export const OrderSection = () => {
  const images = [
    {
      url: "../public/assets/flame.png",
      title: "GrubHub",
      width: "100%",
    },
    {
      url:  "../public/assets/fatpig.png" ,
      title: "DoorDash",
      width: "100%",
    },
    {
      url:  "../public/assets/fatpig.png" ,
      title: "Uber",
      width: "100%",
    },
    {
      url:  "../public/assets/fatpig.png",
      title: "SquareSpace",
      width: "100%",
    },
  ];

  return (
    <div className={styles.container}>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {images.map((image) => (
            <Grid item xs={12} md={2}>
              <OrderCard image={image}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
