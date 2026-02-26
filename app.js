const express = require('express');
const app = express();
const cors = require("cors");



require("dotenv").config();
const connectDB = require("./connection/connect")

const Feedback_Router = require("./routes/Feedback");
const { Feedback_Controller } = require('./controllers/Feedback');


const port = process.env.PORT || 3300;
const host = process.env.HOST || "localhost";


app.use(express.json())
app.use(cors())

app.use("/api/v1/Feedback_Router",  Feedback_Router);     

app.get('/', (req, res) => {
  res.send('Running Successfully!')
})


connectDB();
app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`);
})