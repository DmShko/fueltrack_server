require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // see file !!!readme.txt

// import 'tracks' veb-server
const track = require('./app');
const mongoose = require('mongoose');
// connect URL with password and database name see below!
const { DB_HOST, PORT=3000 } = process.env;

mongoose.set('strictQuery', true);

// connect to DataBase after start to server
mongoose.connect(DB_HOST).then(() =>{
    // start 'pills' veb-server
    track.listen(PORT, () => {
        console.log("Server running. Use our API on port: 3000");
    });
}).catch(error => {

    console.log(error.message);
  
    // close started process: '1' means - close with unknow error
    process.exit(1);
});