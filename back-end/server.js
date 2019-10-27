// require http modules first
const http = require('http');

// import app.js file
const app = require('./app');

// define port to be used
const port = process.env.PORT || 3100;
const server = http.createServer(app);

server.listen(port, () => {
    // print message when the server runs successfully
    console.log("Server started successfully")
});
