const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const SubmissionTypeRouter = require("./src/Route/submissionType-routes");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/submissionType", SubmissionTypeRouter());


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

