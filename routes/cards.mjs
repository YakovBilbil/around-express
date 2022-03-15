import express from "express";
import { getCards, createCard, deleteCardById, likeCard, dislikeCard } from "../controllers/cards.mjs";

const router = express.Router();

router.get("/", getCards);

router.post("/", createCard);

router.delete("/:card_id", deleteCardById);

router.put("/:card_id/likes", likeCard);

router.delete("/:card_id/likes", dislikeCard);

export default router;