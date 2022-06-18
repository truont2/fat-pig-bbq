import dbConnect from "../../../lib/dbConnect";
import Meals from "../../../models/Meals";
import { db } from '../../../firebase';
import { collection, getDocs, deleteDoc, doc, onSnapshot, setDoc , serverTimestamp,} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
export default async function handler(req, res) {
  const { method, cookies } = req;
  const auth = getAuth();
  const token = cookies.token;

  if (method === "POST") {
    try {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      res.status(200).json("Succesfull");
    } catch (err) {
        console.timeLog(err);
        res.status(400).json("Wrong Credentials!");
    }
  }
}