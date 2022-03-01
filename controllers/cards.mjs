import { getJsonFromFile, findFilePath } from "../helpers/files.mjs";

const cardsFilePath = findFilePath("cards.json");

const getCards = async(req, res) => {
    try {
        const cards = await getJsonFromFile(cardsFilePath);
        res.send(cards);
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

export default getCards;