import express from "express";
import { v4 as uuid4 } from "uuid";
import Database from "../controllers/database.js";
import { checkToken } from "../middlewares/authenticate.js";

const router = express.Router();

router.use(checkToken);

router.get("/:driverId/rating", (req, res) => {
  const driverId = req.params;

  const driver = Database.getById("drivers", driverId);

  return res.status(201).json({
    id: driver.id,
    name: driver.name,
    rating: driver.rating,
  });
});

router.post("/:driverId/rating", (req, res) => {
  const driverId = req.params.driverId;

  const { stars, description } = req.query;

  const driver = Database.getById("drivers", driverId);

  if (!driver) {
    return res.status(404).json({ message: "driver not found" });
  }
  const feedbacks = driver.rating.feedbacks;

  feedbacks.push({
    id: uuid4(),
    stars: Number(stars),
    description,
  });

  const sumStars = feedbacks.reduce((acc, { stars }) => acc + Number(stars), 0);

  const average = sumStars / feedbacks.length;

  driver.rating.starsAverage = average;

  Database.updateOne("drivers", driverId, driver);

  return res.status(201).json({ message: "Thanks for the feedback :)" });
});

export default router;
