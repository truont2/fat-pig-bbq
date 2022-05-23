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
export default function AlertItem() {
  
  const [open, setOpen] = useState(true);

  return (
  <>
    <CssBaseline />
          <Box sx={{ width: "100%" }} className={styles.alert}>
            <Collapse in={open}>
              <Alert
                className={styles.message}
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                We are closing on friday the 13th
              </Alert>
            </Collapse>
            <Button
              disabled={open}
              variant="outlined"
              onClick={() => {
                setOpen(true);
              }}
            >
              Re-open
            </Button>
          </Box>
  </>
        
  );
}

