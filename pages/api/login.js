import dbConnect from "../../lib/dbConnect";
import Meals from "../../models/Meals";
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc, onSnapshot, setDoc , serverTimestamp,} from "firebase/firestore";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { update, remove } from "../../redux/userSlice";
import {  signInWithEmailAndPassword  } from "firebase/auth";
export default async function handler(req, res) {
  const { method, cookies, body } = req;
  const token = cookies.token;

  if (method === "POST") {
    const { email, password } = req.body
    try {
      const userCredential = await signInWithEmailAndPassword (auth, email, password);
      // const { refreshToken, providerData } = userCredential;
      // console.log(refreshToken, providerData);
      // just save user and uid to identify the user
      // localStorage.setItem("user", JSON.stringify(providerData));
      // localStorage.setItem("accessToken", JSON.stringify(refreshToken));
          // Signed in automatically
          const user = auth.currentUser;
      //get the user from the stored data and then need to return that data whiuch can be saved to the state
    console.log(userCredential, "signed in user)")

    
    res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}