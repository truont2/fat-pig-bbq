import React from 'react'
import styles from '../styles/About.module.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function about() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue"].join(","),
    },
  });
  return (
    <div className={styles.main}>
        <ThemeProvider theme={theme}>
        <Typography align="center" variant="h2">
          About Us
        </Typography>
        <div className={styles.left}>
          <Image
            alt="ribs"
            src="/assets/Fat-Pig-BBQ.jpeg"
            layout="fill"
            objectFit="contain"
            className={styles.img}
          />
        </div>

        <Typography align="center" variant="h6">
          testing text
        </Typography>
      </ThemeProvider>
    
    
    </div>
  )
}
