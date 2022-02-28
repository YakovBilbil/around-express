import express from "express";
import users_router from "./users.mjs";
import cards_router from "./cards.mjs";

const router = express();

router.use("/users", users_router);

router.use("/cards", cards_router);

router.use(async(req, res) => {
    res.status(404).send({
        "message": "Requested resource not found"
    });
});

export default router;