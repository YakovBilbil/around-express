import express from "express";
import response_for_other_else_url from "../controllers/else.mjs";

const router = express.Router();

router.use("/", response_for_other_else_url);

export default router;