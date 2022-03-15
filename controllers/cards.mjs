import Card from "../models/card.mjs"

const getCards = async(req, res) => {
    try {
        const cards = await Card.find({});
        res.send(cards);
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const createCard = async(req, res) => {
    try {
        const newCard = await Card.create(req.body);
        if (!newCard) {
            res.status(400).send({
                "message": "invalid data passed to the methods for creating a card"
            });
        } else {
            res.send(newCard);
        }
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const deleteCardById = async(req, res) => {
    try {
        const card = await Card.findOneAndRemove({ _id: req.params.card_id });
        if (!card) {
            res.status(404).send({
                "message": "Card ID not found"
            });
        } else {
            res.send(card);
        }
    } catch (error) {
        if (error.name === "CastError") {
            res.status(400).send({
                "message": `${error.name}. Invalid Card ID`
            });
        } else {
            res.status(500).send({
                "message": "Something went wrong"
            });
        }
    }
}

const likeCard = async(req, res) => {
    try {
        const card = await Card.findOneAndUpdate({ _id: req.params.card_id }, { $addToSet: { likes: req.user._id } }, { new: true });
        if (!card) {
            res.status(404).send({
                "message": "Card ID not found"
            });
        } else {
            res.send(card);
        }
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const dislikeCard = async(req, res) => {
    try {
        const card = await Card.findOneAndUpdate({ _id: req.params.card_id }, { $pull: { likes: req.user._id } }, { new: true });
        if (!card) {
            res.status(404).send({
                "message": "Card ID not found"
            });
        } else {
            res.send(card);
        }
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}



export { getCards, createCard, deleteCardById, likeCard, dislikeCard };