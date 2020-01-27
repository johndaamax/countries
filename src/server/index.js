require('dotenv').config()
const express = require('express')
const app = express();
const connectDB = require('./db')

const authRouter = require('./routes/auth')
const signupRouter = require('./routes/register')

//connect Mongo
connectDB();

app.use(express.json({extended: false}));

app.use('/login', authRouter);
app.use('/register', signupRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Starting server at port ${PORT}....`));