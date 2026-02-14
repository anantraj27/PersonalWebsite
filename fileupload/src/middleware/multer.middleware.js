import multer from "multer";
import { fileTypeFromBuffer } from "file-type";


// using the property of multer to storing file on  disk storage .. 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file + '-'+uniqueSuffix)
  },



})

//  filtering the type of file  that we can upload .. 
// const filefilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' ||
//     file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
//     cb(null, true)
//   }
//   else {
//     cb(new Error("file type is not valid"), false);
//   }
// }
// craating multer objct ....
const upload = multer({
  storage: storage,
 
  limits: { fileSize: 1 * 1024 * 1024 }
}

)

export default upload;


// Then Multer attaches this object to request:
/*
req.file = {
   fieldname: "uploaded_file",
   originalname: "someImage.png",
   mimetype: "image/png",
   size: 234234,
   path: "uploads/abc123.png"
}

*/