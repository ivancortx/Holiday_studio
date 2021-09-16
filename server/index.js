const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const holidayStudioRoutes = require('./src/routes/routes');
const admin = require('./src/config/firebase-config')
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const updatePhotoCheckRole = require('./src/middleware/updatePhotoCheckRole')
const fetchPhotoCheckRole = require('./src/middleware/fetchPhotoCheckRole')
const app = express();

const csrfMiddleware = csrf({ cookie: true });
const PORT = 5000

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);

app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});

app.post('/api/add-photo', updatePhotoCheckRole);
app.get('/api/fetch-photo/:title', fetchPhotoCheckRole);


app.use('/api', holidayStudioRoutes.routes);

app.listen(PORT, () => console.log('App is listening on url http://localhost:' + PORT));