const express = require('express');
const {
  updatePhotos,
  fetchPhoto,
  saveUser
  // getAllStudents,
  // getStudent,
  // updateStudent,
  // deleteStudent
} = require('../controllers/holidayStudioController');

const router = express.Router();

router.post('/add-photo', updatePhotos);
router.get('/fetch-photo/:title', fetchPhoto);
router.post('/save-user', saveUser)
// router.get('/students', getAllStudents);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);


module.exports = {
  routes: router
}