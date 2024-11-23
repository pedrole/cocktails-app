require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes placeholder
app.get('/', (req, res) => res.send('API is running'));
const cocktailsRoute = require('./routes/cocktails');
app.use('/api/cocktails', cocktailsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
