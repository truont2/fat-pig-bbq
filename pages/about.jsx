import React from "react";
import styles from "../styles/About.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { fetcher } from "../lib/api";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function about({ aboutPage }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue"].join(","),
    },
  });

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  function Item(props) {
    return (
      <Paper style={{ width: "80%", margin: "0 auto" }}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    );
  }
  return (
    <div className={styles.main}>
      <ThemeProvider theme={theme}>
        <Typography align="center" variant="h2">
          About Us
        </Typography>
        <div className={styles.left}>
          <Image
            alt="ribs"
            src="/assets/Fat-Pig-BBQ.jpeg"
            layout="fill"
            objectFit="contain"
            className={styles.img}
          />
        </div>
        <div className={styles.text}>
          {aboutPage.data.map((text) => {
            return (
              <Typography align="center" variant="h6">
                {text.attributes.paragraph}
              </Typography>
            );
          })}
        </div>

        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </ThemeProvider>
    </div>
  );
}

export const getStaticProps = async () => {
  const aboutResponse = await await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about-pages?populate=*`
  );
  console.log(aboutResponse.data[0].attributes.paragraph);
  return {
    props: {
      aboutPage: aboutResponse,
    },
  };
};
