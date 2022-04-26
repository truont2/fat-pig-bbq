import React from "react";
import styles from "../styles/OrderSection.module.css";
import { OrderCard } from "../components/OrderCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import grubhublogo from "../public/assets/grubhublogo.png";
import doordashlogo from "../public/assets/doordashlogo.png";
import ubereatslogo from "../public/assets/ubereatslogo.png";
import squarespacelogo from "../public/assets/instore.png";

export const OrderSection = () => {
  const images = [
    {
      url: "https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085?utm_source=google&utm_medium=organic&utm_campaign=place-action-link",
      title: "GrubHub",
      width: "100%",
      image: grubhublogo,
    },
    {
      url: "https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/?utm_campaign=gpa",
      title: "DoorDash",
      width: "100%",
      image: doordashlogo,
    },
    {
      url: "https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw",
      title: "Uber Eats",
      width: "100%",
      image: ubereatslogo,
    },
    {
      url: "https://www.google.com/",
      title: "SquareSpace",
      width: "100%",
      image: squarespacelogo,
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
              <a href={image.url} target={"_blank"} rel={"noreferrer"}>
                <OrderCard image={image} />
              </a>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
