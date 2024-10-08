const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const imageUplode = require('../models/uplodeImage');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/caseimg');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const baseUrl = `${req.protocol}://${req.get("host")}/api/image`;
        const newImg = await imageUplode.create({ image: req.file.filename });
        const response = baseUrl + newImg.image;
        console.log(response);
        res.status(200).json(response);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:imageName", (req, res) => {
    const image = req.params.imageName;
    const imageFolder = path.join(__dirname, "../upload");
    const file = path.join(imageFolder, image)
    console.log(file);
    res.sendFile(file);
});

module.exports = router