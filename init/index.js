const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");



const MONGO_URL= "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.log(err);
});

async function main(){
  await mongoose.connect(MONGO_URL);
}

// random prev data from db is dlted and then insert data 
const initDB = async () => {
 await Listing.deleteMany({});
 await Listing.insertMany(initData.data);
 console.log("data was initialised")
};

initDB();
