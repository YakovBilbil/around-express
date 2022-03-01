import { getJsonFromFile, findFilePath } from "../helpers/files.mjs";

const usersFilePath = findFilePath("users.json");

const getUsers = async(req, res) => {
    try {
        const users = await getJsonFromFile(usersFilePath);
        res.send(users);
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const getUserById = async(req, res) => {
    try {
        const users = await getJsonFromFile(usersFilePath);
        const user = users.find(user => user._id === req.params.user_id);
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

export { getUsers, getUserById };