import express from "express";
import { addUser } from "../Controllers/userController.js";

const UserRouter = new express.Router();

UserRouter.post("/add", addUser);

export default UserRouter;
