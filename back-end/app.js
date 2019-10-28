const helpers = require('./lib/helpers')
const express = require('express')
const request = require('request')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())

app.post("/view-yaml", (req, res, next) => {
  const { url } = req.body
  const rawURL = helpers.formatURL(url)

  let json = null
  request.get(rawURL, function (error, response, body) {
    if (error || response.statusCode != 200) { res.json(error) }
    if (!error && response.statusCode == 200) {
      json = helpers.parseYamlToJson(body)
    }
    res.json(json)
  })
})


module.exports = app
