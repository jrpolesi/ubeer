import express from "express";
import Database from "../controllers/database.js";
import { v4 as uuid4 } from "uuid";

const router = express.Router();
const pricePerKm = 10;

router.get("/newTravel/users/:userId", (req, res) => {
  const { from, to } = req.body;
  const userId = req.params.userId;

  const user = Database.getById("users", userId);

  const distance = Math.hypot(from.lat - to.lat, from.long - to.long);
  const totalPrice = distance * pricePerKm;

  const travel = {
    id: uuid4(),
    from: from.name,
    to: to.name,
    departureDate: Date.now(),
    arrivedDate: "",
    value: totalPrice,
  };

  user.travelHistoric.push(travel);

  Database.updateOne("users", userId, user);

  const driver = Database.getRandomItem("drivers");

  res.status(201).json({ travel, driver });
});

export default router;

/* {from:{
    name:"" ,
    lat: "",
    long: ""
}, to: {
    name:"" ,
    lat: "",
    long: ""
}}
 */
/*
    {driver: driver    
    }

*/
