import React from "react";
import styles from "../styles/OrderSection.module.css";
import { OrderCard } from "../components/OrderCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export const OrderSection = () => {
  const images = [
    {
      url: "https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085?utm_source=google&utm_medium=organic&utm_campaign=place-action-link",
      title: "GrubHub",
      width: "80%",
      image: "/assets/grubhub.jpg",
      description: 'Delivery Service'
    },
    {
      url: "https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/?utm_campaign=gpa",
      title: "DoorDash",
      width: "80%",
      image: "/assets/DD.jpg",
      description: 'Delivery Service'
    },
    {
      url: "https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw",
      title: "Uber Eats",
      width: "80%",
      image: "/assets/uber.jpg",
      description: 'Delivery Service'
    },
    {
      url: "https://www.google.com/",
      title: "SquareSpace",
      width: "80%",
      image: "/assets/squarespace.jpg",
      description: 'Delivery Service'
    },
  ];

  return (
    <>
      <Typography variant="h3" align="center" sx={{my: 0}}>Order Here</Typography>
      <div className={styles.container}>
      
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          direction="row"
  justifyContent="center"
        >
          {images.map((image) => (
            <Grid item 
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
              <OrderCard image={image} />
          </Grid>
          ))}
        </Grid>
      </Box>
    </div>
    </>
    
  );
};
