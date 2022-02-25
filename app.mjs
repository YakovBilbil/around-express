import express from "express";
import usersRouter from "./routes/users.mjs";
import cardsRouter from "./routes/cards.mjs";

const app = express();
const { PORT = 3000 } = process.env;

app.get("*", (req, res) => {
    res.send("Requested resource not found");
});

app.use("/users", usersRouter);

app.use("/cards", cardsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});