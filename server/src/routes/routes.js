const express = require('express');
const {
  updatePhotos,
  fetchPhoto,
  saveUser,
  updateVideos,
  fetchVideo
} = require('../controllers/holidayStudioController');

const router = express.Router();

router.post('/add-photo', updatePhotos);
router.get('/fetch-photo/:title', fetchPhoto);
router.post('/add-video', updateVideos);
router.get('/fetch-video/:title', fetchVideo);
router.post('/save-user', saveUser)

module.exports = {
  routes: router
}