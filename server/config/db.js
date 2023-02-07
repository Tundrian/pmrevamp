const mongoose = require('mongoose')
const connectDB = async() => {
    try{
        mongoose.set('strictQuery', false)
        const conn = mongoose.connect(process.env.DB_URL)
        console.log(`Connected to database`)
        
    }catch(err){
        console.log(err)
        process.exit(1)
    }   
    
}

module.exports = connectDB

