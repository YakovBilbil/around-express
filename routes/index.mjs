import express from "express";
import usersRouter from "./users.mjs";
import cardsRouter from "./cards.mjs";

const router = express();

router.use("/users", usersRouter);

router.use("/cards", cardsRouter);

router.use((req, res) => {
    res.status(404).send({
        "message": "Requested resource not found"
    });
});

export default router;