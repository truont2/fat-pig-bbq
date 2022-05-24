// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import ButtonBase from "@mui/material/ButtonBase";
// import Typography from "@mui/material/Typography";

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: "relative",
//   height: 200,
//   [theme.breakpoints.down("sm")]: {
//     width: "100% !important", // Overrides inline-style
//     height: 100,
//   },
//   "&:hover, &.Mui-focusVisible": {
//     zIndex: 1,
//     "& .MuiImageBackdrop-root": {
//       opacity: 0.15,
//     },
//     "& .MuiImageMarked-root": {
//       opacity: 0,
//     },
//     "& .MuiTypography-root": {
//       border: "4px solid currentColor",
//     },
//   },
// }));

// const ImageSrc = styled("span")({
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// });

// const Image = styled("span")(({ theme }) => ({
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled("span")(({ theme }) => ({
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create("opacity"),
// }));

// const ImageMarked = styled("span")(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: "absolute",
//   bottom: -2,
//   left: "calc(50% - 9px)",
//   transition: theme.transitions.create("opacity"),
// }));

// export const OrderCard = ({ image }) => {
//   return (
//     // <Box
//     //   sx={{ display: "flex", flexWrap: "wrap", width: { xs: "50px", md: "300px"}}}
//     // >
//     //   <ImageButton
//     //     focusRipple
//     //     key={image.title}
//     //     style={{
//     //       width: image.width,
//     //     }}
//     //   >
//     //   {/* reference is from public. nextjs looks at public and then looks for file path  */}
//     //     <ImageSrc style={{ backgroundImage: `url(${image.image})` }} />
        
//     //     <ImageBackdrop className="MuiImageBackdrop-root" />
//     //     <Image>
//     //       <Typography
//     //         component="span"
//     //         variant="subtitle1"
//     //         color="inherit"
//     //         sx={{
//     //           position: "relative",
//     //           p: 4,
//     //           pt: 2,
//     //           pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//     //         }}
//     //       >
//     //         {image.title}
//     //         <ImageMarked className="MuiImageMarked-root" />
//     //       </Typography>
//     //     </Image>
//     //   </ImageButton>
//     // </Box>
//     <div>hello</div>
//   );
// };
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/OrderCard.module.css';
import { styled } from "@mui/material/styles"
import { textFieldClasses } from '@mui/material';
import { Cursor } from 'mongoose';
export const OrderCard = ({ image }) => {

  const MyComponent = styled('button')({
    background: "linear-gradient(45deg, #d42a4f 30%, rgba(129,52,0,255) 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textDecoration: "none",
    textAlign: "center", 
    cursor: "pointer"
  });

  return (
    <Card sx={{ minWidth: 275, maxWidth: 345 }} className={styles.card} elevation={3}>
      <CardMedia
        component="img"
        height="150"
        image={image.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {image.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {image.description}
        </Typography>
      </CardContent>
      <CardActions>
            <a href={image.url} target={"_blank"} rel={"noreferrer"} style={{textDecoration:'none'}}>
              <MyComponent>Order here</MyComponent>
            </a>
      </CardActions>
    </Card>
  );
}
