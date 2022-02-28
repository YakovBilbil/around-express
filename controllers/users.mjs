import { get_json_from_file, find_file_path } from "../helpers/files.mjs";

const users_file_path = find_file_path("users.json");

const get_users = async(req, res) => {
    try {
        const users = await get_json_from_file(users_file_path);
        res.send(users);
    } catch (error) {
        res.status(500).send({
            "message": "Something went wrong"
        });
    }
}

const get_user_by_id = async(req, res) => {
    try {
        const users = await get_json_from_file(users_file_path);
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

export { get_users, get_user_by_id };