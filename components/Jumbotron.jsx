import React from 'react'
import Paper from '@mui/material/Paper';
import image from '../public/assets/flame.jpg'
import CssBaseline from "@mui/material/CssBaseline";
import styles from '../styles/Jumbotron.module.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Jumbotron = () => {
  return (
      <>
        <CssBaseline/>
        <Paper className={styles.jumbo}>
            <Container className={styles.container} maxWidth="md">
                <Grid className={styles.content} container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography variant="h4">Fat Pig BBQ</Typography>
                        <Typography variant="p">Come try our barbecue</Typography>
                        <Box my={1} >
                            <Button variant="outlined">View our Menu</Button>
                        </Box>
                    </Grid> 
                </Grid>

            </Container>
        </Paper>
      </>
    
  )
}
