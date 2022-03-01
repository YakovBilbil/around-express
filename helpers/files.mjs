import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const getJsonFromFile = async(filePath) => {
    const file = await fs.promises.readFile(filePath);
    return JSON.parse(file);
}

const findModuleDirPath = () => {
    const __filename = fileURLToPath(
        import.meta.url);
    return path.dirname(__filename);
}

const findFilePath = (file) =>
    path.join(findModuleDirPath(), "..", "data", file);

export { getJsonFromFile, findFilePath };