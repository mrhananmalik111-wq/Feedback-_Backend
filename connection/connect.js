const mongoose = require("mongoose")
async function connectDB() {
    try {
        await mongoose.connect(process.env.URI)
        console.log("Data Base Connected Successfully ✅")
    } catch (e) {
        console.log(e.message)
    }
}
module.exports=connectDB;