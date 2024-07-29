const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/patient-registration-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const Patient = require('./models/Patient');

app.post('/api/patients', (req, res) => {
  const patient = new Patient(req.body);
  patient.save((err, patient) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(patient);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});