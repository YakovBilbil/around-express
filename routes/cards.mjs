import express from "express";
import { getCards } from "../controllers/cards.mjs";

const router = express.Router();

router.get("/", getCards);

export default router;