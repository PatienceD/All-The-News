//if deployed, use the deployed database. Otherwise use the local mongoHeadlines databae
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect to the Mongo DB
// mongoose.connect(MONGODB_URI);

// // Dependencies
// var express = require("express");
// var mongojs = require("mongojs");
// var path = require('path');
// // Require axios and cheerio. This makes the scraping possible
// var axios = require("axios");
// var cheerio = require("cheerio");

// // Initialize Express
// var app = express();

// // Database configuration
// var databaseUrl = "scraper";
// var collections = ["scrapedData"];

// // Hook mongojs configuration to the db variable
// var db = mongojs(databaseUrl, collections);
// db.on("error", function (error) {
//     console.log("Database Error:", error);
// });

// // Simple index route
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname + "/public/index.html"));
// });


// // Make a request via axios for the news section of `ycombinator`
// axios.get("https://www.nytimes.com/").then(function (response) {
//     // Load the html body from axios into cheerio
//     var $ = cheerio.load(response.data);

//     // An empty array to save the data that we'll scrape
//     var results = [];

//     // Select each element in the HTML body from which you want information.
//     // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//     // but be sure to visit the package's npm page to see how it works
//     $("article").each(function (i, element) {

//         var title = $(element).children().text();
//         var link = $(element).find("a").attr("href");

//         // Save these results in an object that we'll push into the results array we defined earlier
//         results.push({
//             title: title,
//             link: link
//         });
//     });
//     console.log(results);

// });




// // Listen on port 3000
// app.listen(3000, function () {
//     console.log("App running on port 3000!");
// });
