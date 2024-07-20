const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://kamleshsingh6871:Fnd8jjkzXLhOcnuS@test-pro-db.5l5hey7.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose