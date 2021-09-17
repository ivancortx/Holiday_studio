const admin = require('../config/firebase-config')

const addReviewCheckRole = async (req, res, next) => {
  console.log(req.body.token)
  const token = req.body.token
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

module.exports = addReviewCheckRole