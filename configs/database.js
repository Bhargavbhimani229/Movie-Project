const { default: mongoose } = require("mongoose");

const db = async()=>{
 try {
  await mongoose.connect('mongodb+srv://bhargavbhimani229:12345@cluster0.4z4wz.mongodb.net/movies');
  console.log("Database Concted");
 } catch (error) {
  console.log(error.message);  
 }
}

module.exports = db;