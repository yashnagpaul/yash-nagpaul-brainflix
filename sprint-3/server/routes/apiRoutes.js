//========== REQUIRED IMPORTS

const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//========== VARIABLES

const videoDetailsFile = path.join(__dirname, "../data/videos-details.json");
const arrayOfVideoDetails = JSON.parse(fs.readFileSync(videoDetailsFile));
const videoDataFile = path.join(__dirname, "../data/videos.json");
const actualVideoData = JSON.parse(fs.readFileSync(videoDataFile));

//========== WHEN CLIENT REQUESTS: GET from "/"

router.get("/", (req, res) => {
  res.send("<h2>Welcome to Yash's API</h2><h4>Try the '/videos' path</h4>");
});

//========== WHEN CLIENT REQUESTS: GET from "/VIDEOS"

router.get("/videos", (req, res) => {
  res.json(actualVideoData);
});

//========== WHEN CLIENT REQUESTS: GET from "/VIDEOS/:ID"

router.get("/videos/:id", (req, res) => {
  res.json(
    arrayOfVideoDetails.filter((videoObj) => videoObj.id === req.params.id)[0]
  );
});

//========== WHEN CLIENT REQUESTS: POST to "/VIDEOS"

router.post("/videos", (req, res) => {
  let newVideo = {};
  if (
    // we check that the client post request contains a valid TITLE and DESCRIPTION
    req.body.title &&
    req.body.description
  ) {
    // then we define the newVideo object
    newVideo = {
      id: uuidv4(),
      title: req.body.title,
      channel: req.body.channel,
      image: req.body.image,
    };
    // then we push this new video object to our existing file with videos data
    actualVideoData.push(newVideo);
    fs.writeFileSync(videoDataFile, JSON.stringify(actualVideoData));
  } // responding to the POST request
  res.json({ newVideo });
});

module.exports = router;

console.log(path.join(__dirname, "../data/videos.json"));
