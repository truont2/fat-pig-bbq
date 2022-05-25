import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styles from "../styles/Login.module.css";
import Card from "react-bootstrap/Card";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";
import { useState } from "react";
import {useRouter} from 'next/router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../firebase";


export default function login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if(user) {
          setTimeout(() => {
            router.push('/');
          }, 3000);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <container className={styles.container}>
      <Card className={styles.content}>
        <form onSubmit={handleLogin}>
          <Card.Title>Sign In</Card.Title>
          <div>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <h6>
            <a className={styles.text} href="#">
              Forgot password?
            </a>
          </h6>
          <h6>
            Don't have an account?{" "}
            <Link className={styles.text} href="/signup">
              Sign Up
            </Link>
          </h6>
        </form>
        {error && <h2>Wrong</h2>}
      </Card>
    </container>
  );
}
