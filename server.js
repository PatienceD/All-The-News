import { Mongoose } from "mongoose";

//if deployed, use the deployed database. Otherwise use the local mongoHeadlines databae
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect to the Mongo DB
Mongoose.connect(MONGODB_URI);