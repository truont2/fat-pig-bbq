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
// import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../../styles/navfooter.module.css";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import NextImage from "./image";
import CustomLink from "./custom-link";

const navigationLinks = [
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about-page" },
  // { name: "Merchandise", href: "" },
  { name: "Contact Us", href: "/contact" },
];

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function ResponsiveAppBar({ navbar, pageContext }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <AppBar
      //AppBar Styling
      className={styles.navbar}
    >
      <Container className={styles.navlinks}>
        <Toolbar>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              marginRight: "10px",
            }}
          >
            <a href="/">
              {/* <Image
                src={fatpiglogo}
                alt="Thiccc Pig"
                width="220"
                height={80}
                layout="intrinsic"
              /> */}
              <NextImage width="220" height="80" media={navbar.logo} />
            </a>
          </Box>
          {/* <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
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
                  className={styles.navLink}
                >
                  {item.name}
                </Link>
              ))}
            </Hidden>
          </Box> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          />

          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Hidden mdDown>
              {/* {navigationLinks.map((item) => (
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
                  className={styles.navLink}
                >
                  {item.name}
                </Link>
              ))} */}
              {navbar.links.map((navLink, idx) => (
                <ListItem>
                  {/* <Link color="textPrimary" underline="none" href={navLink.url}>
                {navLink.text}
              </Link> */}
                  {/* <CustomLink link={navLink} locale={router.locale}> */}
                    <Link
                      href={navLink.url}
                      sx={{ m: 0.45 }}
                      color="textPrimary"
                      underline="none"
                      style={{
                        fontFamily: "Bebas Neue",
                        color: "whitesmoke",
                        fontSize: "25px",
                      }}
                      className={styles.navLink}
                    >
                      {navLink.text}
                    </Link>
                  {/* </CustomLink> */}
                </ListItem>
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
        anchor="top"
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
          {navbar.links.map((navLink, idx) => (
            <ListItem>
              {/* <Link color="textPrimary" underline="none" href={navLink.url}>
                {navLink.text}
              </Link> */}
              <CustomLink link={navLink} locale={router.locale}>
                <div className="hover:text-gray-900 px-2 py-1">
                  {navLink.text}
                </div>
              </CustomLink>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}

// import { useState } from "react"
// import PropTypes from "prop-types"
// import Link from "next/link"
// import { useRouter } from "next/router"

// import { getButtonAppearance } from "utils/button"
// import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
// import { MdMenu } from "react-icons/md"
// import MobileNavMenu from "./mobile-nav-menu"
// import ButtonLink from "./button-link"
// import NextImage from "./image"
// import CustomLink from "./custom-link"
// import LocaleSwitch from "../locale-switch"

// const Navbar = ({ navbar, pageContext }) => {
//   const router = useRouter()
//   const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

//   return (
//     <>
//       {/* The actual navbar */}
//       <nav className="border-gray-200 border-b-2 py-6 sm:py-2">
//         <div className="container flex flex-row items-center justify-between">
//           {/* Content aligned to the left */}
//           <div className="flex flex-row items-center">
//             <Link href="/">
//               <a className="h-8 w-32">
//                 <NextImage width="120" height="33" media={navbar.logo} />
//               </a>
//             </Link>
//             {/* List of links on desktop */}
//             <ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10">
//               {navbar.links.map((navLink) => (
//                 <li key={navLink.id}>
//                   <CustomLink link={navLink} locale={router.locale}>
//                     <div className="hover:text-gray-900 px-2 py-1">
//                       {navLink.text}
//                     </div>
//                   </CustomLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex">
//             {/* Locale Switch Mobile */}
//             {pageContext.localizedPaths && (
//               <div className="md:hidden">
//                 <LocaleSwitch pageContext={pageContext} />
//               </div>
//             )}
//             {/* Hamburger menu on mobile */}
//             <button
//               onClick={() => setMobileMenuIsShown(true)}
//               className="p-1 block md:hidden"
//             >
//               <MdMenu className="h-8 w-auto" />
//             </button>
//             {/* CTA button on desktop */}
//             {navbar.button && (
//               <div className="hidden md:block">
//                 <ButtonLink
//                   button={navbar.button}
//                   appearance={getButtonAppearance(navbar.button.type, "light")}
//                   compact
//                 />
//               </div>
//             )}
//             {/* Locale Switch Desktop */}
//             {pageContext.localizedPaths && (
//               <div className="hidden md:block">
//                 <LocaleSwitch pageContext={pageContext} />
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile navigation menu panel */}
//       {mobileMenuIsShown && (
//         <MobileNavMenu
//           navbar={navbar}
//           closeSelf={() => setMobileMenuIsShown(false)}
//         />
//       )}
//     </>
//   )
// }

// Navbar.propTypes = {
//   navbar: PropTypes.shape({
//     logo: PropTypes.shape({
//       image: mediaPropTypes,
//       url: PropTypes.string,
//     }),
//     links: PropTypes.arrayOf(linkPropTypes),
//     button: buttonLinkPropTypes,
//   }),
//   initialLocale: PropTypes.string,
// }

// export default Navbar
