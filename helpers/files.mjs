import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const getJsonFromFile = async(filePath) => {
    const file = await fs.promises.readFile(filePath);
    return JSON.parse(file);
}

const dirName = () => {
    const __filename = fileURLToPath(
        import.meta.url);
    return path.dirname(__filename);
}

const pathJoin = (file) =>
    path.join(dirName(), "..", "data", file);

export { getJsonFromFile, pathJoin };