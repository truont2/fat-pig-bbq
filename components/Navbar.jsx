import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
// import MenuItem from "@mui/material/MenuItem";
// import { makeStyles } from "@mui/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import styles from "../styles/Navbar.module.css";
import pig from "../public/assets/fatpig.png";
import Image from "next/image";

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  // change the nav bar to scroll to the section on interest
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="navbar" style={{ backgroundColor: "maroon" }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters className="navLinks">
              {/* Logo/Businessname */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", md: "flex" } }}
                className="h2"
              >
                Fat Pig BBQ
              </Typography>
              <Image src={pig} alt="Fat Pig BBQ log" />
              {/* spacer */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

              {/* link section */}
              <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                <a href="#Menu">
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", md: "flex" } }}
                    className={styles.h4}
                  >
                    Menu
                  </Typography>
                </a>
                <a href="#Location">
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", md: "flex" } }}
                    className={styles.h4}
                  >
                    Location
                  </Typography>
                </a>

                <a href="#About">
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", md: "flex" } }}
                    className={styles.h4}
                  >
                    About
                  </Typography>
                </a>

                <a href="#Merchandise">
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", md: "flex" } }}
                    className={styles.h4}
                  >
                    Merchandise
                  </Typography>
                </a>
                <a href="#Contact">
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", md: "flex" } }}
                    className={styles.h4}
                  >
                    Contact Us
                  </Typography>
                </a>
              </Box>

              {/* renders the 3 dots  */}
              {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>

                {renderMobileMenu}
              </Box> */}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
