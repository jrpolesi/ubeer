import express from "express";
import { checkToken } from "../middlewares/authenticate.js";
import { v4 as uuid4 } from "uuid";
import bcrypt from "bcryptjs";
import tokenConfig from "../config/jwt.js";
import Database from "../controllers/database.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/signup", (req, res) => {
  const { password, ...newUser } = req.body;

  const userFromDatabase = Database.getByEmail("users", newUser.email);

  if (userFromDatabase) {
    return res
      .status(400)
      .json({ message: "Already exist an user with this email" });
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (!err) {
      const userToSave = {
        id: uuid4(),
        ...newUser,
        password: hash,
        budget: 0,
        favoritesPlaces: [],
        travelHistoric: [],
      };

      Database.createOne("users", userToSave);

      const token = jwt.sign(
        {
          name: newUser.name,
          email: newUser.email,
        },
        tokenConfig.secret,
        { expiresIn: tokenConfig.expiresIn }
      );

      return res.status(201).json({ newUser, token });
    }

    return res.status(500).json(err);
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = Database.getByEmail("users", email);
  const { password: encryptedPassword, ...userWithoutPassword } = user;

  if (!user) {
    return res.status(401).json({ message: "invalid password or email" });
  }

  bcrypt.compare(password, encryptedPassword, (err) => {
    if (err) {
      return res.status(401).json({ message: "invalid password or email" });
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      tokenConfig.secret,
      { expiresIn: tokenConfig.expiresIn }
    );

    return res.status(200).json({ userWithoutPassword, token });
  });
});

router.use(checkToken);

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  const user = Database.getById("users", userId);

  return res.status(200).json(user);
});

router.put("/:userId/budget", (req, res) => {
  const userId = req.params.userId;
  const newBudget = req.query.value;

  const user = Database.getById("users", userId);

  user.budget = Number(newBudget);

  Database.updateOne("users", userId, user);

  return res.status(204).end();
});

router.post("/:userId/favorites", (req, res) => {
  const userId = req.params.userId;
  const newPlace = req.query.place;

  const user = Database.getById("users", userId);

  user.favoritesPlaces.push({
    id: uuid4(),
    name: newPlace,
  });

  Database.updateOne("users", userId, user);

  return res.status(201).json({ message: "Favorites was updated" });
});

export default router;
