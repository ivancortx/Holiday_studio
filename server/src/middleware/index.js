const admin = require('../config/firebase-config')
const firestore = admin.firestore();

class Middleware {
  async decodeToken(req, res, next) {

    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      console.log(req)
      try {
        const decodeValue = await admin.auth().verifyIdToken(token)
        admin
            .auth()
            .setCustomUserClaims(decodeValue.uid, { admin: false })
            .then(() => {
            });

        if (decodeValue) {
          return next()
        }

        return res.json({message: 'Un authorize'})
      } catch (e) {
        return res.json({message: 'Internal Error'})
      }
    }
  }



  async createUser(user) {
    admin.auth()
        .createUser({
          // email: 'user@example.com',
          // emailVerified: false,
          // phoneNumber: '+11234567890',
          // password: 'secretPassword',
          // displayName: 'John Doe',
          // photoURL: 'http://www.example.com/12345678/photo.png',
          // disabled: false,
        })
        .setCustomUserClaims(decodeValue.uid, { admin: false })
        .then((userRecord) => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log('Successfully created new user:', userRecord.uid);
        })
        .catch((error) => {
          console.log('Error creating new user:', error);
        });
  }



}


module.exports = new Middleware()