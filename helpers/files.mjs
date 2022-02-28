import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const get_json_from_file = async(filePath) => {
    const file = await fs.promises.readFile(filePath);
    return JSON.parse(file);
}

const find_module_dir_path = () => {
    const __filename = fileURLToPath(
        import.meta.url);
    return path.dirname(__filename);
}

const find_file_path = (file) =>
    path.join(find_module_dir_path(), "..", "data", file);

export { get_json_from_file, find_file_path };