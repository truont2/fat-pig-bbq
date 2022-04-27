import React from "react";
import styles from "../styles/OrderSection.module.css";
import { OrderCard } from "../components/OrderCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import grubhublogo from "../public/assets/grubhublogo.png";
import doordashlogo from "../public/assets/doordashlogo.png";
import ubereatslogo from "../public/assets/ubereatslogo.png";
import squarespacelogo from "../public/assets/instore.png";
import Image from 'next/image'

export const OrderSection = () => {
  const images = [
    {
      url: "https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085?utm_source=google&utm_medium=organic&utm_campaign=place-action-link",
      title: "GrubHub",
      width: "80%",
      image: "/assets/grubhublogo.png",
    },
    {
      url: "https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/?utm_campaign=gpa",
      title: "DoorDash",
      width: "80%",
      image: "/assets/doordashlogo.png",
    },
    {
      url: "https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw",
      title: "Uber Eats",
      width: "80%",
      image: "/assets/ubereatslogo.png",
    },
    {
      url: "https://www.google.com/",
      title: "SquareSpace",
      width: "80%",
      image: "/assets/ubereatslogo.png",
    },
  ];

  return (
    <div className={styles.container}>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          {images.map((image) => (
            <Grid item xs={12} s={6} md={4} lg={3}>
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
