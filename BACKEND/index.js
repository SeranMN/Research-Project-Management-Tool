const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const connectDB = require("./src/config/config");
const SubmissionRouter = require("./src/Route/submission.router")

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/submission",SubmissionRouter)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

