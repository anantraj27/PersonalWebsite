import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import env from "dotenv"
import upload from "./src/middleware/multer.middleware.js";
import fileValidation from "./src/middleware/filevalidation.js";
import fileupload from "./src/util/cloudinary.js";
env.config();
const app = express();
const port = process.env.PORT || 8000;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const dir_name = dirname(fileURLToPath(import.meta.url))


function addSomething(req, res, next) {
  req.fileUploadMessage ='file, uploaded succesfully'
  next();
}

app.get("/",addSomething, (req, res) => {
  console.log("------>")
  res.sendFile(path.join(dir_name, '/public/photo.html'));
  
});


app.post('/stats', upload.single('uploaded_file'),fileValidation,addSomething, async function (req, res) {


  let localfileuploadpath = req.file.path;
  let imagelink = await fileupload(localfileuploadpath)
    res.json({
    message :req.fileUploadMessage ,
    file: req.file.filename

  });
  console.log("image link is " ,imagelink)
});

app.listen(port, () => {
  console.log(`app is listining on ${port} port `)
})
/*

*/