import express from "express";
import { getUsers, getUserById, createUser, updateUserProfile, updateUserAvatar } from "../controllers/users.mjs";

const router = express.Router();

router.get("/", getUsers);

router.get("/:user_id", getUserById);

router.post("/", createUser);

router.patch("/me", updateUserProfile);

router.patch("/me/avatar", updateUserAvatar);

export default router;