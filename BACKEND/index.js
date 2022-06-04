const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const marksRouter = require("./src/Route/marks");
const presentRouter = require("./src/Route/presentationmarks");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/marks", marksRouter);
app.use("/Presentationmarks", presentRouter);


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

