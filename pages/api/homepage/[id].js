import { ConstructionOutlined } from "@mui/icons-material";
import dbConnect from "../../../lib/dbConnect";
import Homepage from "../../../models/Homepage";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies
  } = req;

  const token = cookies.token

  await dbConnect();

  if (method === "GET") {
    try {
      // const items = await Homepage.find().sort({created_at: -1}).limit(1);
      const items = await Homepage.findById(id);
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
      const home = await Homepage.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(home);
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  }
}