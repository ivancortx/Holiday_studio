
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const holidayStudioRoutes = require('../routes/routes');
const middleware = require('../middleware/index')

const app = express();

const PORT = 5000
//
// app.use(middleware.decodeToken)
// app.get('/api/saveUser', (req, res) => {
//
//   return res.json({answer: 'Wait for writing to database'})
// })

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', holidayStudioRoutes.routes);



app.listen(PORT, () => console.log('App is listening on url http://localhost:' + PORT));
