const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const connectDB = require("./src/config/config");
const SubmissionTypeRouter = require("./src/Route/submissionType-routes");
const SubmissionRouter = require('./src/Route/submission.router');
const user = require('./src/Route/user.route');
const login = require('./src/Route/login.route');
const staff = require('./src/Route/staff.route');
const group = require('./src/Route/group.route')
const supReq = require('./src/Route/SupReq.rout')
const topic = require('./src/Route/topic.router');
const panel = require('./src/Route/panel.route');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/submission",SubmissionRouter)
app.use('/topic', topic());
app.use("/submissionType", SubmissionTypeRouter());


app.use('/user', user());
app.use('/login', login())
app.use('/Staff', staff())
app.use('/group', group())
app.use('/supreq', supReq())
app.use('/panel', panel());
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

