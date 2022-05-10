import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styles from "../styles/Login.module.css";
import Card from "react-bootstrap/Card";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

export default function login() {
  return (
    <Card className={styles.content}>
      <form>
        <Card.Title>Sign In</Card.Title>
        <div>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <h6>
          <a href="#">Forgot password?</a>
        </h6>

        <h6>
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </h6>
      </form>
    </Card>
  );
}
