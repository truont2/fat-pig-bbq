import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import styles from "../styles/Alert.module.css";

export default function AlertItem({ data, bannerIsShown, setBannerIsShown }) {
  // const [open, setOpen] = useState(true);

  return (
    <div>
      <CssBaseline />
      <Box sx={{ width: "100vw" }} className={styles.alert}>
        <Collapse in={bannerIsShown}>
          <Alert
            className={styles.message}
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setBannerIsShown(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {data.text}
          </Alert>
        </Collapse>
        {/* <Button
              disabled={open}
              variant="outlined"
              onClick={() => {
                setOpen(true);
              }}
            >
              Re-open
            </Button> */}
      </Box>
    </div>
  )
}
