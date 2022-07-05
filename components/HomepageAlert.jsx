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
  
  export const HomepageAlert = ({ homepage }) => {
  
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
        <div className={styles.content}>
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
                <MyComponent style={{fontFamily: "Bebas Neue", fontSize:"20px", margin: "10px auto"}} className={styles.button}>Order here</MyComponent>
              </a>
          </div>
        </div>
      </div>
    );
  };
  