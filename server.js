import express from "express";
import dotenv from "dotenv";

import connectToDB from "./Config/DB.js";
import UserRouter from "./Routes/UserRoutes.js";

dotenv.config();
connectToDB();
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API WORKING!");
});

app.use("/api/user", UserRouter);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
