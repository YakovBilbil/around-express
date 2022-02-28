import { getJsonFromFile, pathJoin } from "../helpers/files.mjs";

const requestedResourceNotFoundFilePath = pathJoin("requestedResourceNotFound.json");
const somethingWentWrongFilePath = pathJoin("somethingWentWrong.json");

let errorMessage;

const response_for_other_else_url = async(req, res) => {
    try {
        errorMessage = await getJsonFromFile(requestedResourceNotFoundFilePath);
        res.status(404).send(errorMessage);
    } catch (error) {
        console.log("Error happened in getCards", error);
        errorMessage = await getJsonFromFile(somethingWentWrongFilePath);
        res.status(500).send(errorMessage);
    }
}

export default response_for_other_else_url;