const admin = require('../config/firebase-config')

const fetchPhotoCheckRole = async (req, res, next) => {
  console.log(req.headers.token)
  const token = req.headers.token
  admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        if (uid) {
          next()
        }
      })
      .catch((error) => {
        // Handle error
      });
}

module.exports = fetchPhotoCheckRole