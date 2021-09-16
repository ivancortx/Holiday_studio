'use strict';

const admin = require('../config/firebase-config');
const firestore = admin.firestore();

const updatePhotos = async (req, res, next) => {
  try {
    const data = req.body.data;

    const title = req.body.title
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

const updateVideos = async (req, res, next) => {
  try {
    const data = req.body.data;
    const title = req.body.title
    await firestore.collection('videosData').doc(title).set(data);
    res.send('Videos saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const fetchVideo = async (req, res, next) => {
  try {
    const title = req.params.title;

    const catalog = await firestore.collection("videosData").doc(title)
    const data = await catalog.get()

    if (!data.exists) {
      res.status(404).send('Video not found');
    } else {
      res.send(data.data());
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
}

const saveUser = async (req, res, next) => {
  try {
    const adminsQueryDocument = await firestore.collection("admins").doc('admins').get()
    const admins = await adminsQueryDocument.data().admin
    const token = req.body.token
    const decodeValue= await admin.auth().verifyIdToken(token)
    const userId = decodeValue.uid

    admins.filter(item => {
      if (item.email === decodeValue.email) {
        decodeValue["roles"] = ["user", "admin"]
      } else {
        decodeValue["roles"] = ["user"]
      }
     return decodeValue
    })

    await firestore.collection("usersData").doc(userId).set(decodeValue)

    return res.json(decodeValue)
  } catch (e) {
    return res.json({message: 'Internal Error'})
  }
}

module.exports = {
  updatePhotos,
  fetchPhoto,
  updateVideos,
  fetchVideo,
  saveUser
}