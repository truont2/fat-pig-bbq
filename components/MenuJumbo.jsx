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

import Image from "next/image";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MenuJumbo = ({ homepage }) => {
  return (
    <div className={styles.menu}>
      <CssBaseline />
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <img src={homepage.jumboIMG} className={styles.img}/> */}
          <Image
            alt="ribs"
            src={homepage.menuIMG}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className={styles.right}>
          <div className="content">
            <h1
              style={{
                fontFamily: "Bebas Neue",
              }}
            >
              {homepage.menuCardTitle}
            </h1>
            <p
              style={{
                fontFamily: "Bebas Neue",
              }}
            >
              {homepage.menuCardDesc}
            </p>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Check out the Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
