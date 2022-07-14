import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
import styles from "../../styles/navfooter.module.css";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { useRouter } from "next/router";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {"Copyright © Fat Pig BBQ "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      className={styles.container}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
          <Stack
            sx={{ p: 2 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <IconButton
              size="medium"
              aria-label="Facebook"
              color="inherit"
              className="footer-icon"
              onClick={() =>
                (window.location.href = "https://www.facebook.com/myfatpigbbq/")
              }
            >
              <FaFacebookF />
            </IconButton>

            <IconButton
              size="medium"
              aria-label="instagram"
              color="inherit"
              className="footer-icon"
              onClick={() =>
                (window.location.href = "https://www.instagram.com/fatpigbbq/")
              }
            >
              <FaInstagram />
            </IconButton>

            <IconButton
              size="medium"
              aria-label="mail"
              color="inherit"
              className="footer-icon"
              onClick={() => (window.location = "mailto:fatpigbbq@yahoo.com")}
            >
              <FaEnvelope />
            </IconButton>
            <IconButton
              size="medium"
              aria-label="Facebook"
              color="inherit"
              className="footer-icon"
              onClick={() =>
                (router.push("/login"))
              }
            >
              login
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

// import PropTypes from "prop-types"
// import { linkPropTypes, mediaPropTypes } from "../../utils/types"
// import NextImage from "./image"
// import CustomLink from "./custom-link"

// const Footer = ({ footer }) => {
//   return (
//     <footer className="pt-12 bg-gray-100">
//       <div className="container flex flex-col lg:flex-row lg:justify-between">
//         <div>
//           {footer.logo && (
//             <NextImage width="120" height="33" media={footer.logo} />
//           )}
//         </div>
//         <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
//           {footer.columns.map((footerColumn) => (
//             <div
//               key={footerColumn.id}
//               className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
//             >
//               <p className="uppercase tracking-wide font-semibold">
//                 {footerColumn.title}
//               </p>
//               <ul className="mt-2">
//                 {footerColumn.links.map((link) => (
//                   <li
//                     key={link.id}
//                     className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900"
//                   >
//                     <CustomLink link={link}>{link.text}</CustomLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </nav>
//       </div>
//       <div className="text-sm bg-gray-200 py-6 text-gray-700">
//         <div className="container">{footer.smallText}</div>
//       </div>
//     </footer>
//   )
// }

// Footer.propTypes = {
//   footer: PropTypes.shape({
//     logo: mediaPropTypes.isRequired,
//     columns: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//           .isRequired,
//         title: PropTypes.string.isRequired,
//         links: PropTypes.arrayOf(linkPropTypes),
//       })
//     ),
//     smallText: PropTypes.string.isRequired,
//   }),
// }

// export default Footer
