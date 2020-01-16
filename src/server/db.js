const mongoose = require('mongoose');
const DB = process.env.MONGO_CR;

const connectDB = async () => {
    try {
        await mongoose.connect(DB, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        });
        console.log('Connected to Mongo...')
    } catch (err) {
        console.error(err.message)
        console.log('Exiting program...')
        process.exit(1);
    }
}

module.exports = connectDB;