import dbConnect from "../../../util/mongo";
import Meals from "../../../models/Meals";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const items = await Meals.find();
      res.status(200).json(items);
    } catch (err) {
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