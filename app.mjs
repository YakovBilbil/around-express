import express from "express";
import usersRouter from "./routes/users.mjs";
import cardsRouter from "./routes/cards.mjs";
import elseRouter from "./routes/else.mjs";

const app = express();
const { PORT = 3000 } = process.env;

app.use("/users", usersRouter);

app.use("/cards", cardsRouter);

app.use("*", elseRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});