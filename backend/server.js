const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/workouts', require('./routes/workout'));
app.use('/api/user', require('./routes/user'));
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log('Server is listening on port ' + port));
  }).catch((err) => {
    console.log(err);
  })

