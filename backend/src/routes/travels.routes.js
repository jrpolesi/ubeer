import express from "express";
import Database from "../controllers/database.js";
import { v4 as uuid4 } from "uuid";

const router = express.Router();
const pricePerKm = 20;

router.post("/newTravel/users/:userId", (req, res) => {
  const { from, to, distance } = req.body;
  const userId = req.params.userId;

  const user = Database.getById("users", userId);

  const totalPrice = distance * pricePerKm;

  const travel = {
    id: uuid4(),
    from: from.name,
    to: to.name,
    departureDate: new Date(),
    arrivedDate: "",
    value: totalPrice,
  };

  user.travelHistoric.push(travel);

  Database.updateOne("users", userId, user);

  const driver = Database.getRandomItem("drivers");

  res.status(201).json({ travel, driver });
});

router.put("/newTravel/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const travelId = req.query.travelid;

  const user = Database.getById("users", userId);

  const travel = user.travelHistoric.find((element) => element.id === travelId);

  travel.arrivedDate = new Date();

  Database.updateOne("users", userId, user);

  return res.status(200).json(travel);
});

export default router;

