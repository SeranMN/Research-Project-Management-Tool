const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const user = require('./src/Route/user.route');
const login = require('./src/Route/login.route');
const staff = require('./src/Route/staff.route');
const group = require('./src/Route/group.route')
const supReq = require('./src/Route/SupReq.rout')
const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

connectDB();
app.use('/user', user());
app.use('/login', login())
app.use('/Staff', staff())
app.use('/group', group())
app.use('/supreq', supReq())
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

