const admin = require('../config/firebase-config')

class Middleware {
  async decodeToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]

   try  {
     const decodeValue = await admin.auth().verifyIdToken(token)
     console.log(decodeValue)

     if (decodeValue) {
       return next()
     }

     return res.json({message: 'Un authorize'})
   } catch (e) {
     return res.json({message: 'Internal Error'})
   }
   
  }

  async createUser (user) {
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