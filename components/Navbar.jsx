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
import fatpiglogo from "../public/assets/fatpigbanner.jpg";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
// TO DO: logo on the left that is an href to the home page
// TO DO: Hover effect for link items
// TO DO: Click effect for onClick of nav items

const navigationLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Location", href: "" },
  { name: "About", href: "/about" },
  // { name: "Merchandise", href: "" },
  { name: "Contact Us", href: "/contact" },
];

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      //AppBar Styling
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
      }}
      position="fixed"
      className={styles.navbar}
    >
      <Container className={styles.navlinks} maxWidth="xlg">
        <Toolbar>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              marginRight: "10px",
            }}
          >
            <a href="/">
              <Image
                src={fatpiglogo}
                alt="Thiccc Pig"
                width="170"
                height={60}
                layout="intrinsic"
              />
            </a>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginRight: "50px",
            }}
          >
            <Hidden mdDown>
              {navigationLinks.map((item) => (
                <Link
                  sx={{ m: 0.45 }}
                  color="textPrimary"
                  underline="none"
                  href={item.href}
                  style={{
                    fontFamily: "Bebas Neue",
                    color: "whitesmoke",
                    fontSize: "25px",
                  }}
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

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "flex", md: "flex" },
            }}
          />

          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Hidden mdDown>
              <Link
                sx={{ m: 0.45 }}
                color="textPrimary"
                underline="none"
                href="/login"
                style={{
                  fontFamily: "Bebas Neue",
                  color: "whitesmoke",
                  fontSize: "25px",
                }}
              >
                Login
              </Link>
              <Link
                sx={{ m: 0.45 }}
                color="textPrimary"
                underline="none"
                href="/signup"
                style={{
                  fontFamily: "Bebas Neue",
                  color: "whitesmoke",
                  fontSize: "25px",
                }}
              >
                Sign Up
              </Link>
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
          {navigationLinks.map((item, idx) => (
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
