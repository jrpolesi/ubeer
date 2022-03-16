import jwt from "jsonwebtoken";
import tokenConfig from "../config/jwt.js";

export function checkToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ message: "This route need a token" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, tokenConfig.secret, (err) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    next();
  });
}
