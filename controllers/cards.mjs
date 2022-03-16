import Card from "../models/card.mjs"
import { INVALID_DATA_ERROR, NOT_FOUND_ERROR, DEFAULT_ERROR, handleCatchErrors } from "../utils/errorsHandle.mjs";

const getCards = async(req, res) => {
    try {
        const cards = await Card.find({});
        res.send(cards);
    } catch (error) {
        res.status(DEFAULT_ERROR).send({
            "message": `${error.name}. Something went wrong`
        });
    }
}

const createCard = async(req, res) => {
    try {
        const { name, link } = req.body;
        const newCard = await Card.create({ name: name, link: link, owner: req.user._id });
        if (!newCard) {
            res.status(INVALID_DATA_ERROR).send({
                "message": "invalid data passed to the methods for creating a card"
            });
        } else {
            res.send(newCard);
        }
    } catch (error) {
        res.status(DEFAULT_ERROR).send({
            "message": `${error.name}. Something went wrong`
        });
    }
}

const deleteCardById = async(req, res) => {
    try {
        const card = await Card.findOneAndRemove({ _id: req.params.card_id });
        if (!card) {
            res.status(NOT_FOUND_ERROR).send({
                "message": "Card ID not found"
            });
        } else {
            res.send(card);
        }
    } catch (error) {
        handleCatchErrors(error);
    }
}

const likeCard = async(req, res) => {
    try {
        const card = await Card.findOneAndUpdate({ _id: req.params.card_id }, { $addToSet: { likes: req.user._id } }, { new: true });
        if (!card) {
            res.status(NOT_FOUND_ERROR).send({
                "message": "Card ID not found"
            });
        } else {
            res.send(card);
        }
    } catch (error) {
        handleCatchErrors(error);
    }
}

const dislikeCard = async(req, res) => {
    try {
        const card = await Card.findOneAndUpdate({ _id: req.params.card_id }, { $pull: { likes: req.user._id } }, { new: true });
        if (!card) {
            res.status(NOT_FOUND_ERROR).send({
                "message": "Card ID not found"
            });
        } else {
            res.send(card);
        }
    } catch (error) {
        handleCatchErrors(error);
    }
}



export { getCards, createCard, deleteCardById, likeCard, dislikeCard };