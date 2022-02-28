import express from "express";
import get_cards from "../controllers/cards.mjs";

const router = express.Router();

router.get("/", get_cards);

export default router;