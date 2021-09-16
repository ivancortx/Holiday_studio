const admin = require('../config/firebase-config')
const firestore = admin.firestore();

const updatePhotoCheckRole = async(req, res, next) => {
  const adminsQueryDocument = await firestore.collection("admins").doc('admins').get()
  const admins = await adminsQueryDocument.data().admin
  const token = await req.body.token

  admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        const uid = decodedToken.uid;

        admins.filter(item => {
          if (item.uid === uid) {
            next()

          }
        })
      })
      .catch((error) => {
        // Handle error
      });
}

module.exports = updatePhotoCheckRole





