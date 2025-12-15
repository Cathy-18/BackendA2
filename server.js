require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postsRouter = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('Failed to connect:', err.message);
  process.exit(1);
});

app.use('/', postsRouter);

app.get('/', (req, res) => res.json({ message: 'Backend A2 API is running' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
