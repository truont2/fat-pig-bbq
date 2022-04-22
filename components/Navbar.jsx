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

// TO DO: work on spacing of links.
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
      sx={{
        bgcolor: "maroon",
        display: "flex",
      }}
      position="fixed"
    >
      <Avatar className="navbarLogo">F</Avatar>
      <Container className={styles.h4} maxWidth="lg">
        <Toolbar disableGutters>
          <Hidden mdDown>
            {navigationLinks.map((item) => (
              <Link color="textPrimary" underline="none" href={item.href}>
                {item.name}
              </Link>
            ))}
          </Hidden>
          <Hidden mdUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)}></MenuIcon>
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />

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
