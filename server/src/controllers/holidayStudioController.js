'use strict';

const admin = require('../config/firebase-config');
const firestore = admin.firestore();

const updatePhotos = async (req, res, next) => {
  try {
    const data = req.body.body.data;

    const title = req.body.body.title
    await firestore.collection('photosData').doc(title).set(data);
    res.send('Photos saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const fetchPhoto = async (req, res, next) => {
  try {
    const title = req.params.title;

    const catalog = await firestore.collection("photosData").doc(title)
    const data = await catalog.get()

    if (!data.exists) {
      res.status(404).send('Photo not found');
    } else {
      res.send(data.data());
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
}

const saveUser = async (req, res, next) => {
  try {
    const token = req.body.body.token
    const decodeValue = await admin.auth().verifyIdToken(token)
    const userId = decodeValue.uid
    decodeValue["roles"] = "user"
    await firestore.collection("usersData").doc(userId).set(decodeValue)

    return res.json(decodeValue)
  } catch (e) {
    return res.json({message: 'Internal Error'})
  }
}

// const getStudent = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const student = await firestore.collection('students').doc(id);
//     const data = await student.get();
//     if(!data.exists) {
//       res.status(404).send('Student with the given ID not found');
//     }else {
//       res.send(data.data());
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }

// const getAllStudents = async (req, res, next) => {
//   try {
//     const students = await firestore.collection('students');
//     const data = await students.get();
//     const studentsArray = [];
//     if(data.empty) {
//       res.status(404).send('No student record found');
//     }else {
//       data.forEach(doc => {
//         const student = new Student(
//             doc.id,
//             doc.data().firstName,
//             doc.data().lastName,
//             doc.data().fatherName,
//             doc.data().class,
//             doc.data().age,
//             doc.data().phoneNumber,
//             doc.data().subject,
//             doc.data().year,
//             doc.data().semester,
//             doc.data().status
//         );
//         studentsArray.push(student);
//       });
//       res.send(studentsArray);
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }
//
// const getStudent = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const student = await firestore.collection('students').doc(id);
//     const data = await student.get();
//     if(!data.exists) {
//       res.status(404).send('Student with the given ID not found');
//     }else {
//       res.send(data.data());
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }
//
// const updateStudent = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const data = req.body;
//     const student =  await firestore.collection('students').doc(id);
//     await student.update(data);
//     res.send('Student record updated successfuly');
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }
//
// const deleteStudent = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     await firestore.collection('students').doc(id).delete();
//     res.send('Record deleted successfuly');
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }

module.exports = {
  updatePhotos,
  fetchPhoto,
  saveUser
  // getAllStudents,
  // getStudent,
  // updateStudent,
  // deleteStudent
}