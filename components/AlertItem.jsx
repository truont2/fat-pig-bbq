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
import styles from '../styles/Alert.module.css'

export default function AlertItem({homepage}) {
  const handleClose = () => {
    setOpen(false);
    window.localStorage.setItem('alertStatus', true);
  }
  React.useEffect(()=> {
    // get local storage and set state to be whatever but if no local storage, set it to be what the database says
  })
  const [open, setOpen] = useState(homepage.alert.status);
  // for the close icon, do a onclick method which will store the value in local storage then users doing have to keep
  // closing the alert every time they refresh
  return (
  <div className={styles.alert}>
    <CssBaseline />
          <Box sx={{ width: "100vw" }} >
            <Collapse in={open}>
              <Alert
                className={styles.message}
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="inherit" className={styles.button}/>
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {homepage.alert.text}
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

