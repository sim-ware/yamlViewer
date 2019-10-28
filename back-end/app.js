const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const testURL = 'https://github.com/lightheadoc/tripleo/blob/master/net-config-noop.yaml'


app.get("/view-yaml", (req, res, next) => {
  // // 1. Format URL to read from Raw
  const formattedURL = testURL.replace('https://github.com', '').replace('blob/', '')
  const outputURL = 'https://raw.githubusercontent.com' + formattedURL
  // //

  // // 2. Save the YAML file
  const file = fs.createWriteStream('test.yaml');
  const request = https.get(outputURL, function(response) {
    response.pipe(file);
  });
  // //

  // // 3. Parse that YAML file into JSON
  const yaml = require('js-yaml');
  let json = null
  try {
    json = yaml.safeLoad(fs.readFileSync('test.yaml', 'utf8'));
    console.log(json);
  } catch (e) {
    console.log(e);
  }
  // //

  // 1. make configurable - read URL from incoming request/requestBody and then download YAML from that URL
  // 2. delete YAML file when done
  // 3. separate URL helper functions into different file
  // 4. separate YAML downloader functions into different file
  // 5. separate YAML parser functions into different file

  res.json(json ? json : 'fail');
});

module.exports = app;
