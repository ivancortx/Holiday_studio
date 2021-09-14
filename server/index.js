const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const holidayStudioRoutes = require('./src/routes/routes');
const app = express();
const PORT = 5000

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', holidayStudioRoutes.routes);

app.listen(PORT, () => console.log('App is listening on url http://localhost:' + PORT));
