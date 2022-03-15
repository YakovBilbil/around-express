import User from "../models/user.mjs"

const getUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const getUserById = async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.user_id });
        if (!user) {
            res.status(404).send({
                "message": "User ID not found"
            });
        } else {
            res.send(user);
        }
    } catch (error) {
        if (error.name === "CastError") {
            res.status(400).send({
                "message": `${error.name}. Invalid User ID`
            });
        } else {
            res.status(500).send({
                "message": "Something went wrong"
            });
        }
    }
}

const createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        if (!newUser) {
            res.status(400).send({
                "message": "invalid data passed to the methods for creating a user"
            });
        } else {
            res.send(newUser);
        }
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const updateUserProfile = async(req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { new: true });
        if (!user) {
            res.status(404).send({
                "message": "User ID not found"
            });
        } else {
            res.send(user);
        }
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const updateUserAvatar = async(req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { new: true });
        if (!user) {
            res.status(404).send({
                "message": "User ID not found"
            });
        } else {
            res.send(user);
        }
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}


export { getUsers, getUserById, createUser, updateUserProfile, updateUserAvatar };