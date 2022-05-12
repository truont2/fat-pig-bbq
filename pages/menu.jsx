import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from '@mui/material/Grid';
import styles from '../styles/Menu.module.css';

import Button from '@mui/material/Button'
export default function menu() {
  const menu = [
    {
      name: "Chicken Meal Small",
      content: "Chicken Thigh, 1 Roll, Coleslaw, Baked Beans",
      price: "10.95",
    },
    {
      name: "Chicken Meal Large",
      content: "1/4 Chicken, 1 Roll, Baked Beans, 1/2 Corn",
      price: "13.25",
    },
    {
      name: "Ribs Meal Small",
      content: "3 Ribs, 1 Roll, Coleslaw, Baked Beans",
      price: "10.50",
    },
    {
      name: "Ribs Meal Large",
      content: "4 Ribs, 1 ROll, Coleslaw, Baked Beans, 1/2 Corn",
      price: "13.25",
    },
    {
      name: "Ribs & Chicken Combo Small",
      content: "2 Ribs, Chicken Drumstick, 1 ROll, Coleslaw, Baked Beans",
      price: "10.50",
    },
    {
      name: "Ribs & Chicken Combo Large",
      content: "4 Ribs, Chicken Thigh, 1 ROll, Coleslaw, Baked Beans, 1/2 Corn",
      price: "13.25",
    },
    {
      name: "Pulled Pork Meal Small",
      content: "Pulled Pork, 1 ROll, Coleslaw, Baked Beans",
      price: "10.50",
    },
    {
      name: "Pulled Pork Meal Large",
      content: "Extra Pulled Pork, 1 ROll, Coleslaw, Baked Beans, 1/2 Corn",
      price: "13.25",
    },
    {
      name: "Half Rack of Ribs",
      content: "6 Ribs",
      price: "13.50",
    },
    {
      name: "Full Rack of Ribs",
      content: "11 Ribs",
      price: "23.75",
    },
    {
      name: "Chicken Leg Quarter",
      content: "",
      price: "6.50",
    },
    {
      name: "Chicken Thigh",
      content: "",
      price: "3.95",
    },
    {
      name: "Chicken Drumstick",
      content: "",
      price: "2.95",
    },
    {
      name: "Pulled Pork Sandwich",
      content:"",
      price: "5.25",
    },
    {
      name: "Pulled Pork Sandwich - Double Meat",
      content: "",
      price: "7.50",
    },
    {
      name: "Kids Meal",
      content:
        "1 Rib or Chicken Drumstick, 1 Roll, Juice, fruit snack, 1/2 Corn",
      price: "7.50",
    },
  ];

  const theme = useTheme();
  return (
    <div className={styles.container}>
      <h1>
        testing
      </h1>
      <Button variant="outlined">Download our Menu</Button>
      <Grid
        container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {menu.map((item, index) => {
          return (
            <Grid item xs={2} sm={3} md={4} key={index}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {item.content}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center",}}
                >
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
              />
            </Card>
          </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
