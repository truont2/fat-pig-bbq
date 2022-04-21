import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
import styles from "../styles/Footer.module.css";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

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
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
