import express from "express";
import { get_users, get_user_by_id } from "../controllers/users.mjs";

const router = express.Router();

router.get("/", get_users);

router.get("/:user_id", get_user_by_id);

export default router;