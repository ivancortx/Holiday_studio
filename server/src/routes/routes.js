const express = require('express');
const {
  updatePhotos,
  fetchPhoto,
  saveUser
} = require('../controllers/holidayStudioController');

const router = express.Router();

router.post('/add-photo', updatePhotos);
router.get('/fetch-photo/:title', fetchPhoto);
router.post('/save-user', saveUser)


module.exports = {
  routes: router
}