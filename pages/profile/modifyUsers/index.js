import React from "react";
import ProfileLayout from "../../../components/layout/profileLayout";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styles from "../../../styles/ModifyMenu.module.css";
import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function modifyMenu({ menuItems }) {
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [per, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      // creates a new collection named cities with document id LA
      const res = await addDoc(collection(db, "cities"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        timeStamp: serverTimestamp(),
      });

      console.log(res.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.newContainer}>
      <div className={styles.top}>
        <h1 className={styles.h1}>Add New User</h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className={styles.right}>
          <form onSubmit={handleAdd} className={styles.form}>
            <div className={styles.formInput}>
              <label htmlFor="file" className={styles.label}>
                Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
                className={styles.input}
              />
            </div>

            <div className={styles.formInput} key="1">
              <label className={styles.label}>Title</label>
              <input
                id="1"
                type="text"
                placeholder="Title"
                className={styles.input}
                // onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="2">
              <label className={styles.label}>Desc</label>
              <input
                id="2"
                type="text"
                placeholder="testing"
                className={styles.input}
                // onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="2">
              <label className={styles.label}>Price</label>
              <input
                id="3"
                type="number"
                placeholder="12.25"
                className={styles.input}
                // onChange={handleInput}
              />
            </div>
            <button
              className={styles.button}
              disabled={per !== null && per < 100}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

modifyMenu.Layout = ProfileLayout;

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}