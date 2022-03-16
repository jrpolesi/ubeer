import express from "express";
import usersRoutes from "./routes/users.routes.js";
import travelsRoutes from "./routes/travels.routes.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/travels", travelsRoutes);

app.use("/users", usersRoutes);

app.listen(port, () => console.log("Running on port " + port));
