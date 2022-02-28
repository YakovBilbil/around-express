import { get_json_from_file, find_file_path } from "../helpers/files.mjs";

const cards_file_path = find_file_path("cards.json");

const get_cards = async(req, res) => {
    try {
        const cards = await get_json_from_file(cards_file_path);
        res.send(cards);
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

export default get_cards;