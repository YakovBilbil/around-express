import User from "../models/user.mjs"
import { INVALID_DATA_ERROR, NOT_FOUND_ERROR, DEFAULT_ERROR, handleCatchErrors } from "../utils/errorsHandle.mjs";

const getUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(DEFAULT_ERROR).send({
            "message": `${error.name}. Something went wrong`
        });
    }
}

const getUserById = async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.user_id });
        if (!user) {
            res.status(NOT_FOUND_ERROR).send({
                "message": "User ID not found"
            });
        } else {
            res.send(user);
        }
    } catch (error) {
        handleCatchErrors(error);
    }
}

const createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        if (!newUser) {
            res.status(INVALID_DATA_ERROR).send({
                "message": "invalid data passed to the methods for creating a user"
            });
        } else {
            res.send(newUser);
        }
    } catch (error) {
        res.status(DEFAULT_ERROR).send({
            "message": `${error.name}. Something went wrong`
        });
    }
}

const updateUserProfile = async(req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { new: true });
        if (!user) {
            res.status(NOT_FOUND_ERROR).send({
                "message": "User ID not found"
            });
        } else {
            res.send(user);
        }
    } catch (error) {
        handleCatchErrors(error);
    }
}

const updateUserAvatar = async(req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { new: true });
        if (!user) {
            res.status(NOT_FOUND_ERROR).send({
                "message": "User ID not found"
            });
        } else {
            res.send(user);
        }
    } catch (error) {
        handleCatchErrors(error);
    }
}


export { getUsers, getUserById, createUser, updateUserProfile, updateUserAvatar };