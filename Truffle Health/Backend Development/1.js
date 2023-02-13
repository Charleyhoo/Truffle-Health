const express = require('express');
const app = express();
const port = 3000;

// Array to store the medical bills
let medicalBills = [];

// Endpoint to get the list of medical bills
app.get('/items', (req, res) => {
  res.send(medicalBills);
});

// Endpoint to create a new medical bill
app.post('/items', (req, res) => {
  const bill = req.body;
  medicalBills.push(bill);
  res.send(`Medical bill for ${bill.patientName} added successfully`);
});

app.listen(port, () => {
  console.log(`Medical bill upload service listening at http://localhost:${port}`);
});
