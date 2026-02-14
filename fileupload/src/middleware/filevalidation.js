import { fileTypeFromBuffer } from "file-type";
import fs from "fs";

// Middleware to validate file type by magic number
//  (file signatures)
const fileValidation = async (req, res, next) => {
    try {
        // get the file path
        const filePath = req.file.path;
        // read the file and return buffer
        const buffer = fs.readFileSync(filePath);
        // console.log(buffer)
        // get the file type
        const type = await fileTypeFromBuffer(buffer);
        // validate
        const allowedTypes = ["image/jpeg", "image/png"];
        if (!type || !allowedTypes.includes(type.mime)) {
       await fs.promises.unlink(filePath)

            return next(new Error("Invalid file type"));
        }

        return next();
    } catch (error) {
        return next(new Error("Internal server error"));
    }
};
export default fileValidation;