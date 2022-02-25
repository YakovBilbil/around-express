import fs from "fs";

const getJsonFromFile = async(filePath) => {
    const file = await fs.promises.readFile(filePath);
    return JSON.parse(file);
}

export default getJsonFromFile;