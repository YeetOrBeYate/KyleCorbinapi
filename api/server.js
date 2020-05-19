const express = require('express');
const cors = require('cors')

const tagRouter = require("./Tag/tagRouter.js")

const app = express();


app.use(express.json());
app.use(cors());

app.use("/tags", tagRouter)

module.exports = app;