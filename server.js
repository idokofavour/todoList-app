const path = require('path')
const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 5000;

const connectDB = require('./config/db');

connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the TodoList API' })
});

const listRouter = require('./routes/lists');
app.use('/api/todoList', listRouter)

app.listen(port, () => console.log(`Server listening on port ${port}`));


