const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const connectDB = require("./src/config/config");
const SubmissionRouter = require("./src/Route/submission.router")

const user = require('./src/Route/user.route');
const login = require('./src/Route/login.route');
const staff = require('./src/Route/staff.route');
const group = require('./src/Route/group.route')
const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/submission",SubmissionRouter)

app.use('/user', user());
app.use('/login', login())
app.use('/Staff', staff())
app.use('/group',group())
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

