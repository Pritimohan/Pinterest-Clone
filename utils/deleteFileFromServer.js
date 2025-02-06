const fs = require("fs");

const deleteFileFromServer = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log("Error in deleting file", err);
        }
    });
};

module.exports = { deleteFileFromServer };