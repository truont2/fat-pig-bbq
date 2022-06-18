import dbConnect from "../../../lib/dbConnect";
import Meals from "../../../models/Meals";
import { db } from '../../../firebase';
import { collection, getDocs, deleteDoc, doc, onSnapshot, setDoc , serverTimestamp,} from "firebase/firestore";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { update, remove } from "../../../redux/userSlice";

export default async function handler(req, res) {
  const { method, cookies, body } = req;
  const token = cookies.token;
  const dispatch = useDispatch();
  console.log("login infor");

  if (method === "POST") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const home = "testing";
      res.status(201).json(home);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}