import dbConnect from "../../../lib/dbConnect";
import Meals from "../../../models/Meals";
import { db } from '../../../firebase';
import { collection, getDocs, deleteDoc, doc, onSnapshot, setDoc , serverTimestamp,} from "firebase/firestore";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  // await dbConnect();

  if (method === "GET") {
    try {
      // const items = await Meals.find();
      // res.status(200).json(items);
      let list = [];
      const querySnapshot = await getDocs(collection(db, "Menu"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(list);
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
      const item = await Meals.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
