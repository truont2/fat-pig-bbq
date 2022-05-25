import React from 'react'
import profileLayout from '../../components/layout/profileLayout'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    setDoc,
  } from "firebase/firestore";
  import { auth, db, storage } from "../../firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styles from '../../styles/ModifyMenu.module.css';


export default function modifyHomepage() {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    return (
      <div className={styles.newContainer}>
      <div className={styles.top}>
        <h1>Homepage</h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <img className={styles.img}
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className={styles.right}>
          <form >
            <div className={styles.formInput}>
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
  
            {/* {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                />
              </div>
            ))} */}
            <div className={styles.formInput} key="1">
                <label>Testing</label>
                <input
                  id="1"
                  type="text"
                  placeholder="testing"
                  // onChange={handleInput}
                />
              </div>
            <button className={styles.button} disabled={per !== null && per < 100} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}

modifyHomepage.Layout = profileLayout;