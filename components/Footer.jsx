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
import { useRouter } from "next/router";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Fat Pig BBQ
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    // <Typography variant="body2" color="inherit" align="center">
    //   {"Copyright © Fat Pig BBQ "}
    //   {new Date().getFullYear()}
    //   {"."}
    // </Typography>
  );
}


export default function StickyFooter() {
  const router = useRouter();
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    //   className={styles.container}
    // >
    //   <Box
    //     component="footer"
    //     sx={{
    //       py: 3,
    //       px: 2,
    //       mt: "auto",
    //     }}
    //   >
    //     <Container maxWidth="sm">
    //       <Copyright />
    //       <Stack
    //         sx={{ p: 2 }}
    //         direction="row"
    //         spacing={2}
    //         justifyContent="center"
    //       >
    //         <IconButton
    //           size="medium"
    //           aria-label="Facebook"
    //           color="inherit"
    //           className="footer-icon"
    //           onClick={() =>
    //             (window.location.href = "https://www.facebook.com/myfatpigbbq/")
    //           }
    //         >
    //           <FaFacebookF />
    //         </IconButton>

    //         <IconButton
    //           size="medium"
    //           aria-label="instagram"
    //           color="inherit"
    //           className="footer-icon"
    //           onClick={() =>
    //             (window.location.href = "https://www.instagram.com/fatpigbbq/")
    //           }
    //         >
    //           <FaInstagram />
    //         </IconButton>

    //         <IconButton
    //           size="medium"
    //           aria-label="mail"
    //           color="inherit"
    //           className="footer-icon"
    //           onClick={() => (window.location = "mailto:fatpigbbq@yahoo.com")}
    //         >
    //           <FaEnvelope />
    //         </IconButton>
    //         <IconButton
    //           size="medium"
    //           aria-label="Facebook"
    //           color="inherit"
    //           className="footer-icon"
    //           onClick={() =>
    //             (router.push("/login"))
    //           }
    //         >
    //           login
    //         </IconButton>
    //       </Stack>
    //     </Container>
    //   </Box>
    // </Box>
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
