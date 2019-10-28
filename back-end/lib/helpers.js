const yaml = require('js-yaml')


const formatURL = (url) => {
  return 'https://raw.githubusercontent.com'
    + url.replace('https://github.com', '').replace('blob/', '')
}

const parseYamlToJson = (yamlContent) => {
  let json = null
  try {
    json = yaml.safeLoad(yamlContent)
    return json
  } catch (e) {
    return e
  }
}


module.exports.formatURL = formatURL
module.exports.parseYamlToJson = parseYamlToJson
