import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SwipeableDrawer, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../styles/Navbar.module.css";
import pig from "../public/assets/fatpig.png";
import Image from "next/image";
import Link from "@mui/material/Link";
import fatpiglogo from "../public/assets/fatpiglogo.png";

// TO DO: logo on the left that is an href to the home page
// TO DO: Hover effect for link items
// TO DO: Click effect for onClick of nav items

const navigationLinks = [
  { name: "Menu", href: "" },
  { name: "Location", href: "" },
  { name: "About", href: "" },
  { name: "Merchandise", href: "" },
  { name: "Contact Us", href: "" },
];

export default function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      //AppBar Styling
      sx={{
        bgcolor: "maroon",
        display: "flex", justifyContent: {xs: "center", md: "space-between"}
      }}
      position="fixed"
    >
      <Container
        className={styles.navlinks}
        maxWidth="xlg"
      >
        <Toolbar disableGutters>
          <div style={{width: "5rem"}}>
            <Image src={fatpiglogo} alt="Thiccc Pig" width={100} height={100} layout="responsive"/>
          </div>
            <Box
              sx={{
                flexGrow: 2,
                display: { xs: "flex", md: "flex" },
              }}
            />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Hidden mdDown>
              {navigationLinks.map((item) => (
                <Link
                  sx={{ m: 0.45 }}
                  color="textPrimary"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </Hidden>
            <Hidden mdUp>
              <IconButton>
                <MenuIcon onClick={() => setOpen(true)}></MenuIcon>
              </IconButton>
            </Hidden>
          </Box>
        </Toolbar>
      </Container>
      {/* Swipeable drawer that shows up on tablets and phones */}
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        {/* Chevron that closes the drawer, users are also able to swipe on their device */}
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        {/* Links as a list in the swipeable drawer */}
        <List>
          {navigationLinks.map((item) => (
            <ListItem>
              <Link color="textPrimary" underline="none" href={item.href}>
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
