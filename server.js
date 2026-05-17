require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // see file !!!readme.txt

// import 'tracks' veb-server
const track = require('./app');
const mongoose = require('mongoose');
const cron = require('node-cron');
// connect URL with password and database name see below!
const { DB_HOST, PORT=Number(process.env.PORT) || 3000 } = process.env;

mongoose.set('strictQuery', true);

// connect to DataBase after start to server
mongoose.connect(DB_HOST).then(() =>{
    // start 'pills' veb-server
    track.listen(PORT, () => {
        console.log("Server running. Use our API on port: 3000");
    });

    cron.schedule('0 0 * * *', async () => {
    // Імпорт відбувається ТІЛЬКИ тоді, коли годинник б'є 00:00
    const autoCleaner = require('./helpers/autoCleaner'); 
    await autoCleaner();
    });
}).catch(error => {

    console.log(error.message);
  
    // close started process: '1' means - close with unknow error
    process.exit(1);
});