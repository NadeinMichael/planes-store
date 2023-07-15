const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { getPlanes, createPlane } = require('../controllers/planes');

// show where to store downloaded files
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.get('/', getPlanes);
router.get('/:id', (req, res) => res.send('Get single plane'));
router.post('/', upload.single('planeImage'), createPlane);

module.exports = router;
