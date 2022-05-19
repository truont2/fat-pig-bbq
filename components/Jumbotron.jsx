import React from "react";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../styles/Jumbotron.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from "@mui/material/Alert"

export const Jumbotron = ({homepage}) => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bebas Neue',
      ].join(','),
    },
  });

  return (
    <>
      <CssBaseline />
      <Paper className={styles.jumbo}>
        <Container className={styles.container} maxWidth="md">
          <Grid
            className={styles.content}
            container
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Grid item>
              <ThemeProvider theme={theme}>
                <Typography align="center" variant="h1">{homepage.title}</Typography>
                <Typography align="center" variant="h4">{homepage.desc}</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item>
              <Button>Check out our menu</Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};
