import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import LayoutDefault from "../components/layout/Layout";
import styles from "../styles/App.module.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
// Client-side cache shared for the whole session
// of the user in the browser.
import store from "../redux/store";
import { Provider } from "react-redux";
const clientSideEmotionCache = createEmotionCache();
import { useSelector } from "react-redux";

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [open, setOpen] = useState(true);
  const Layout = Component.Layout || EmptyLayout;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arizonia&family=Bebas+Neue&family=Courgette&family=Lobster&family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant,
                consistent, and simple baseline to
                build upon. */}

        <CssBaseline />
          <Provider store={store}>
            <LayoutDefault>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LayoutDefault>
          </Provider>;
      </ThemeProvider>
    </CacheProvider>
  );
}

// function MyApp({ Component, pageProps }) {

//   const Layout = Component.Layout || EmptyLayout;
//   return (
//     <Provider store={store}>
//       <CssBaseline />
//       <LayoutDefault>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//       </LayoutDefault>
//     </Provider>
//   );
// }

const EmptyLayout = ({ children }) => <>{children}</>;

// export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
