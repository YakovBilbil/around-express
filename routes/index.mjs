import express from "express";
import usersRouter from "./users.mjs";
import cardsRouter from "./cards.mjs";
import { NOT_FOUND_ERROR } from "../utils/errorsHandle.mjs";

const router = express();

router.use("/users", usersRouter);

router.use("/cards", cardsRouter);

router.use((req, res) => {
    res.status(NOT_FOUND_ERROR).send({
        "message": "Requested resource not found"
    });
});

export default router;