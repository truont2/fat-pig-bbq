import React from "react";
import Paper from "@mui/material/Paper";
import image from "../public/assets/flame.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../styles/Jumbotron.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Jumbotron = () => {

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
          >
            <Grid item>
              <ThemeProvider theme={theme}>
                <Typography variant="h1">Fat Pig BBQ</Typography>
                <Typography variant="h4" align="center">Come try our barbecue</Typography>
              </ThemeProvider>
              
              <Box my={1}>
                {/* put complex button from material ui  */}
                <Button variant="outlined">View our Menu</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};
