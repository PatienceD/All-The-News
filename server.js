//if deployed, use the deployed database. Otherwise use the local mongoHeadlines databae
// let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect to the Mongo DB
// mongoose.connect(MONGODB_URI);

// // Dependencies
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
// var path = require('path');

// // Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
var PORT = 3000;
var app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });


app.get("/scrape", function (req, res) {
    axios.get("https://news.ycombinator.com/").then(function (response) {
        var $ = cheerio.load(response.data);

        $(".title").each(function (i, element) {

            var result = {};

            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");

            db.Article.create(result).then(function (data) {
                console.log(data);
            }).catch(function (err) {
                if (err) throw (err);
            });
        });

        res.send("Scrape Finished");
    });
});

app.get("/articles", function (req, res) {
    db.Article.find({}).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json(err);
    });
});

app.get("/articles/:id", function (req, res) {
    db.Article.findOne({ _id: req.params.id }).populate("note").then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json(err);
    });
});

app.post("/articles/:id", function (req, res) {
    db.Note.create(req.body).then(function (data) {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    }).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json(err);
    });
});

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});