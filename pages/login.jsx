import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styles from '../styles/Login.module.css';

export default function login() {
  return (
    <div className={styles.content}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
    </div>
  )
}
