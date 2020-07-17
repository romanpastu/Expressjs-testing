const mongoose = require("mongoose");

async function connect() {
    try{
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected")
    }catch (err){
        console.log("error connecting to mongodb")
        console.log(err)
    } 
}

module.exports = {connect}