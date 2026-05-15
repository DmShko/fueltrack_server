// this file for emergency manual cleaning
// write 'node server.js' in terminal to start cleaning
require('dotenv').config();

require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); 
const mongoose = require('mongoose');
const autoCleaner = require('./helpers/autoCleaner'); // перевірте шлях до файлу
const { DB_HOST, } = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(async () => {
    await autoCleaner(); // Виклик вашої функції
    await mongoose.disconnect();
    process.exit(0);
  })
  .catch(error => {
    console.error("[CRON] Помилка підключення:", error.message);
    process.exit(1);
  });