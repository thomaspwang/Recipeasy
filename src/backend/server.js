require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

const port = process.env.PORT ? process.env.PORT : 5000;

mongoose.connect(process.env.MONGOOSE, { useNewUrlParser: true });

console.log(process.env.MONGOOSE);
console.log(process.env.PORT);

const db = mongoose.connection;
db.once('open', () => {
    console.log('DB connected successfully!');
});
db.on('error', (err) => {
    console.error(`Error while connecting to DB: ${err.message}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = { app }