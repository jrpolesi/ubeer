import express from "express";
import cors from 'cors';

import usersRoutes from "./routes/users.routes.js";
import travelsRoutes from "./routes/travels.routes.js";
import driversRoutes from "./routes/drivers.routes.js";

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3001;

app.use(cors())

app.use(express.json());

app.use("/travels", travelsRoutes);

app.use("/drivers", driversRoutes);

app.use("/users", usersRoutes);

app.listen(port, () => console.log("Running on port " + port));
