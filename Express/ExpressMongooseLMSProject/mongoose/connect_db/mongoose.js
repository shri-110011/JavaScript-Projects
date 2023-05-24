const mongoose = require('mongoose');

async function main() {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/learning-app-easy", {  
        useNewUrlParser: true,  
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB server...");
}

main().catch(err => console.log(err));