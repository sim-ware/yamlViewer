const express = require('express');
const app = express();


app.get("/view-yaml", async (req, res, next) => {
  // //
  // const inputURL = 'https://github.com/lightheadoc/tripleo/blob/master/net-config-noop.yaml'
  // const outputURL = inputURL.replace('https://github.com', '').replace('blob/', '')
  // //
  // //
  const https = require('https');
  const fs = require('fs');
  // const file = fs.createWriteStream("test.yaml");
  // const request = await https.get("https://raw.githubusercontent.com" + outputURL, function(response) {
  //   response.pipe(file);
  // });
  // //
  // //
  // 2. read from YAML file and parse into JSON Object
  const yaml = require('js-yaml');
  let json = null
  try {
    json = yaml.safeLoad(fs.readFileSync('test.yaml', 'utf8'));
    // indentedJson = JSON.stringify(config, null, 2);
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

  res.json(json);
});

module.exports = app;
