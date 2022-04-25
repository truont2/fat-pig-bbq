import {
  Box,
  Card,
  CssBaseline,
  Paper,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import styles from "../styles/MenuCard.module.css";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MenuJumbo = () => {
  return (
    <div className={styles.menu}>
      <CssBaseline />
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className="content">
            <h1>this is inner content</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
