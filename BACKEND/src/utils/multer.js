const multer = require('multer');
let path = require('path');

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);  
      if (ext !== ".pdf" && ext !== ".docs" && ext !== ".ptx"&& ext !== ".ppt") {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
  });