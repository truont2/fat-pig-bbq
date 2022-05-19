import dbConnect from "../../../lib/dbConnect";
import homepage from "../../../models/Homepage";
import Homepage from "../../../models/Homepage";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const items = await Homepage.find();
      res.status(200).json(items);
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
      const home = await Homepage.findOneAndUpdate(
        { _id:  "6283f495b8b23a8ff2078808"}, 
        { $set: req.body }, 
        { runValidators: true, new: true }
        );
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
      const home = await Homepage.create(req.body);
      res.status(201).json(home);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}