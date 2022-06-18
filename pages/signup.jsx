import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import styles from "../styles/Login.module.css";
import Card from "react-bootstrap/Card";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  RedirectToSignUp
} from "@clerk/nextjs";

export default function signup() {
  return (
    // <container className={styles.container}>
    //   <Card className={styles.content}>
    //     <form>
    //       <Card.Title>Sign Up</Card.Title>
    //       <div>
    //         <input
    //           type="email"
    //           className="form-control"
    //           placeholder="Email address"
    //         />
    //       </div>
    //       <div>
    //         <input
    //           type="password"
    //           className="form-control"
    //           placeholder="Password"
    //         />
    //       </div>
    //       <div>
    //         <button type="submit">Sign Up</button>
    //       </div>
    //       <h6>
    //         Already have an account? <Link href="/login">Log In</Link>
    //       </h6>
    //     </form>
    //   </Card>
    // </container>
    <RedirectToSignUp />
  );
}
