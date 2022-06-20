import { ConstructionOutlined } from "@mui/icons-material";
import dbConnect from "../../../lib/dbConnect";
import Homepage from "../../../models/Homepage";
import { db } from '../../../firebase';
import { collection, getDoc, deleteDoc, doc, onSnapshot, setDoc, serverTimestamp, limit  } from "firebase/firestore";
import { getAuth, signInWithCustomToken } from 'firebase/auth'

export default async function handler(req, res) {
  const {
    method,
    cookies
  } = req;
  // // get current signed in user and authenticate with firebase before doing anything 
  // const user = useUser();
  // const firebaseClerkToken = await user.getToken('firebase')
  // const auth = getAuth();
  // await signInWithCustomToken(auth, firebaseClerkToken);

  await dbConnect();

  if (method === "GET") {
    try {
      // const items = await Homepage.find().sort({created_at: -1}).limit(1);
      const fire = await getDoc(doc(db, "Homepage", "homepage"));
      res.status(200).json(fire.data());
      // res.status(200).json(items);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const home = await Homepage.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
      });
      res.status(201).json(home);
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      // const home = await Homepage.create(req.body);
      const home = await setDoc(doc(db, "Homepage", "homepage"), {
        ...req.body,
        timeStamp: serverTimestamp(),
      });
      res.status(201).json(home);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}