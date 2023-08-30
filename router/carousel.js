const express = require('express');
const router = express.Router();
const path = require('path');
const carouselController = require('../controller/carouselcontroller');
const {imageUpload} = require('../middleware/imageUpload');

carousel = new carouselController();


router.post('/',imageUpload,carousel.createCarousel);
router.get('/',carousel.selectCarousel);
router.put('/:id',carousel.updateCarousel);
router.delete('/:id',carousel.delCarousel);

module.exports = router;