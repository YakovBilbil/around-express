import express from "express";
import { getUsers, getUserById } from "../controllers/users.mjs";

const router = express.Router();

router.get("/", getUsers);

router.get("/:user_id", getUserById);

export default router;