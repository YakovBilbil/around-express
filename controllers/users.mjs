import { getJsonFromFile, pathJoin } from "../helpers/files.mjs";

const usersFilePath = pathJoin("users.json");
const somethingWentWrongFilePath = pathJoin("somethingWentWrong.json");
const userIdNotFoundFilePath = pathJoin("userIdNotFound.json");

let errorMessage;

const get_users = async(req, res) => {
    try {
        const users = await getJsonFromFile(usersFilePath);
        res.send(users);
    } catch (error) {
        console.log("Error happened in getUsers", error);
        errorMessage = await getJsonFromFile(somethingWentWrongFilePath);
        res.status(500).send(errorMessage);
    }
}

const get_user_by_id = async(req, res) => {
    try {
        const users = await getJsonFromFile(usersFilePath);
        const user = users.find(user => user._id === req.params.user_id);
        if (!user) {
            errorMessage = await getJsonFromFile(userIdNotFoundFilePath);
            res.status(404).send(errorMessage);
        } else {
            res.send(user);
        }
    } catch (error) {
        console.log("Error happened in getUserById", error);
        errorMessage = await getJsonFromFile(somethingWentWrongFilePath);
        res.status(500).send(errorMessage);
    }
}

export { get_users, get_user_by_id };