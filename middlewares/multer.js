const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === "dp") {
            cb(null, "public/images/upload/dp")
        }
        else if (file.fieldname === "post") {
            cb(null, 'public/images/upload')
        }
    },
    filename: function (req, file, cb) {
        const fileType = path.extname(file.originalname)
        cb(null, `${uuidv4()}-${fileType}`);
    }
})
const upload = multer({ storage })

module.exports = upload;