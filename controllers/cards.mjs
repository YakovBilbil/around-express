import getJsonFromFile from "../helpers/files.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = path.dirname(__filename);

const cardsFilePath = path.join(__dirname, "..", "data", "cards.json");

export const getCards = async(req, res) => {
    try {
        const cards = await getJsonFromFile(cardsFilePath);
        res.send(cards);
    } catch (error) {
        console.log("Error happened in getCards", error);
        res.status(500).send("Something went wrong");
    }
}