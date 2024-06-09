const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'w9e.h.filess.io',
  user: 'btkgamerdb_airlyingup',
  password: 'e6c43dfbd43015ce5566aea47444c15116ca68d6',
  database: 'btkgamerdb_airlyingup'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
  const { fullName, email, mobileNumber, emailSubject, message } = req.body;
  const query = 'INSERT INTO your_table_name (full_name, email, mobile_number, email_subject, message) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [fullName, email, mobileNumber, emailSubject, message], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('Form submitted successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
