import { getJsonFromFile, pathJoin } from "../helpers/files.mjs";

const cardsFilePath = pathJoin("cards.json");
const somethingWentWrongFilePath = pathJoin("somethingWentWrong.json");

let errorMessage;

const get_cards = async(req, res) => {
    try {
        const cards = await getJsonFromFile(cardsFilePath);
        res.send(cards);
    } catch (error) {
        console.log("Error happened in getCards", error);
        errorMessage = await getJsonFromFile(somethingWentWrongFilePath);
        res.status(500).send(errorMessage);
    }
}

export default get_cards;