const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Set up the Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection String (replace with your own)
// const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://root:root@salon.98k9w.mongodb.net/?retryWrites=true&w=majority&appName=salon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model
const Contact = mongoose.model('Contact', contactSchema);

// Define the POST route for form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
});

mongoose.connect('mongodb://localhost:27017/reservations', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// MongoDB Schema and Model
const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  package: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// API route to handle form submission
app.post('/api/reservations', async (req, res) => {
  const { name, email, date, package } = req.body;

  const newReservation = new Reservation({
    name,
    email,
    date,
    package
  });

  try {
    await newReservation.save();
    res.status(200).json({ message: 'Reservation successful' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save reservation' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
