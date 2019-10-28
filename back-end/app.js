const helpers = require('./lib/helpers')
const express = require('express')
const request = require('request')
const yaml = require('js-yaml')


const app = express()
app.use(express.json())

app.get("/view-yaml", async (req, res, next) => {
  // // 1. Format URL to read from Raw
  const { url } = req.body
  const rawURL = helpers.formatURL(url)

  // // test
  request.get(rawURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const json = yaml.safeLoad(body)
      console.log('*result', json)
    }
  });
  //

  // // 2. Save the YAML file
  // await helpers.saveYamlToFile(rawURL)

  // // 3. Parse that YAML file into JSON
  // helpers.parseYamlToJson()

  // 1. figure out why we can either download the YAML,
  // // or parse it to JSON, but not both
  // 2. delete YAML file when done

  res.json({ requestBody: req.body })
});

module.exports = app
