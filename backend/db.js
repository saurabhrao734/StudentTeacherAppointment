// const mongoose = require('mongoose');
// require('dotenv').config()
// const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/classroom';

// const connectToMongo = () => {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(dbUrl)
//         .then(() => {
//             console.log("DATABASE CONNECTED", mongoose.connection.host)
//         })
//         .catch(err => {
//             console.log("OH NO ERROR!!!!")
//             console.log(err)
//         })
// }

// module.exports = connectToMongo;


// db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
