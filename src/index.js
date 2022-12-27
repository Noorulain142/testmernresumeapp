// const expressValidator = require("express-validator");

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('../server');
const userRoutes = require('../routes/User/user');
const authRoutes = require('../routes/User/auth');
const resumeRoutes = require('../routes/Resume/resume');
const portfolioRoutes = require('../routes/Portfolio/portfolio');

app.set('view engine', 'ejs');
// database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());
// app.use(expressValidator());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/portfolio', portfolioRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client'));
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('App is running on port ' + port, app.settings.env);
});
