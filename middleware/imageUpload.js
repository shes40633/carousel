const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log(file);
        cb(null, 'public/src');
    },
    filename: (req,file,cb)=>{
        // console.log(file);
        cb(null,Date.now()+path.extname(file.originalname));
    }
  });

const upload = multer({storage: storage});


const imageUpload = (req,res,next) => {
    let returnImg =  upload.single('imagePath')

    returnImg(req, res, () => {
      if (!req.file) return res.json({ error: 'not image file' })
      next()
    })
}

module.exports.imageUpload = imageUpload;

