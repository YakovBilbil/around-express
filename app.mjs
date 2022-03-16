import express from "express";
import router from "./routes/index.mjs";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import { mongoServerAddress, limiter } from "./utils/config.mjs"

mongoose.connect(mongoServerAddress);

const app = express();
const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
    req.user = {
        _id: "622d32d67056b041f3fea551"
    };

    next();
});

app.use(helmet())

app.use(limiter)

app.use(bodyParser.json());

app.use(router);

app.listen(PORT);