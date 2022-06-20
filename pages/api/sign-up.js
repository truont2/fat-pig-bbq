import dbConnect from "../../lib/dbConnect";
import Meals from "../../models/Meals";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { update, remove } from "../../redux/userSlice";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { db } from '../../firebase';
import { collection, getDoc, deleteDoc, doc, onSnapshot, setDoc, serverTimestamp, limit  } from "firebase/firestore";

export default async function handler(req, res) {
  const { method, cookies, body } = req;
  const token = cookies.token;
  const auth = getAuth();

  if (method === "POST") {
    const { email, password, name } = req.body
    try {
      await createUserWithEmailAndPassword(auth, email, password)
          // Signed in automatically
          const user = auth.currentUser;
      await updateProfile(user, {displayName: name});

    const newUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        pic: "https://www.kindpng.com/picc/b/495/4952535.png",
        joined: user.metadata.creationTime
    }
    console.log(newUser, "signed in user)")
    await setDoc(doc(db, "users", user.uid), newUser);
    res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
