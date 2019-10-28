const fs = require('fs')
const https = require('https')
const yaml = require('js-yaml')


const formatURL = (url) => {
  return 'https://raw.githubusercontent.com'
    + url.replace('https://github.com', '').replace('blob/', '')
}

const saveYamlToFile = async (rawURL) => {
  const file = fs.createWriteStream('test.yaml')
  const request = await https.get(rawURL, function(response) {
    response.pipe(file)
  });
}

const parseYamlToJson = () => {
  let json = null
  try {
    json = yaml.safeLoad(fs.readFileSync('test.yaml', 'utf8'))
    console.log(json)
  } catch (e) {
    console.log(e)
  }
}

module.exports.formatURL = formatURL
module.exports.saveYamlToFile = saveYamlToFile
module.exports.parseYamlToJson = parseYamlToJson
