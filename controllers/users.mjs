import getJsonFromFile from "../helpers/files.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname, "..", "data", "users.json");

export const getUsers = async(req, res) => {
    try {
        const users = await getJsonFromFile(usersFilePath);
        res.send(users);
    } catch (error) {
        console.log("Error happened in getUsers", error);
        res.status(500).send("Something went wrong");
    }
}

export const getUserById = async(req, res) => {
    try {
        const users = await getJsonFromFile(usersFilePath);
        const user = users.find(user => user._id === req.params.user_id);
        if (!user) {
            res.status(404).send("User ID not found");
        }
        res.send(user);
    } catch (error) {
        console.log("Error happened in getUserById", error);
        res.status(500).send("Something went wrong");
    }
}