import express from "express";
import router from "./routes/index.mjs";

const app = express();
const { PORT = 3000 } = process.env;

app.use(router);

app.listen(PORT);