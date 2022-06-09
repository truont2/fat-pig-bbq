import {
  Box,
  Card,
  CssBaseline,
  Paper,
  Grid,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import styles from "../styles/MenuCard.module.css";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Image from "next/image";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MenuJumbo = ({ homepage }) => {

  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue"].join(","),
    },
  });

  const MyComponent = styled("button")({
    background: "linear-gradient(45deg, #a06874 30%, rgba(129,52,0,255) 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #180a0d4c",
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
  });

  return (
    <div className={styles.menu}>
      <CssBaseline />
       {/* <div className={styles.container}>
        <div className={styles.left}>
          <Image
            alt="ribs"
            src={homepage.menuIMG}
            layout="fill"
            objectFit="contain"
            className={styles.img}
          />
        </div>
        <div className={styles.right}>
          <div className="content">
            <h1
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "3rem",
                marginBottom: "0"
              }}
            >
              {homepage.menuCardTitle}
            </h1>
            <p
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "2rem", 
                marginTop: "0"
              }}
            >
              {homepage.menuCardDesc}
            </p>
            <MyComponent>Checkout the Menu</MyComponent>
          </div>
        </div>
      </div> */}
      <div className={styles.content}>
        <div className={styles.left1}>
          <Image
            alt="ribs"
            src={homepage.menuIMG}
            layout="fill"
            objectFit="contain"
            className={styles.img}
          />
        </div>
        <div className={styles.right1}>
          <ThemeProvider theme={theme}>
            <Typography variant="h1">
              Checkout out our Menu
            </Typography>
            <Typography variant="h4">
              The best Ribs, Chicken, and Pulled Port
            </Typography>
          </ThemeProvider>
          <a href="/menu" target={"_blank"} rel={"noreferrer"} style={{textDecoration:'none'}}>
              <MyComponent className={styles.button}>Order here</MyComponent>
            </a>
        </div>
      </div>
    </div>
  );
};
