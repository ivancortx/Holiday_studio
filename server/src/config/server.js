const express = require('express')
const cors = require('cors')
const middleware = require('../middleware')
const admin = require('../config/firebase-config')

const app = express()

const port = 5000

const ofirebase = require("./setData")

app.use(cors())

app.use(middleware.decodeToken)

app.get('/api/saveUser', (req, res) => {

  return res.json({answer: 'Wait for writing to database'})
})

// admin.firestore().collection('users').doc('title').get({
//   name: 'lolo'
// })

app.listen(port,() => {
  console.log(`server is running on port ${port}`)
})


app.post("/savedata/", function (req, res) {
  console.log(res.body)
  ofirebase.saveData(req.body, function(err, data) {
    res.send(data)
  })
})