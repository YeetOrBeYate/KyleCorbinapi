const express = require('express');
const cors = require('cors')

const tagRouter = require("./Tag/tagRouter.js")
const projectRouter = require("./Project/projectRouter.js")

const app = express();


app.use(express.json());
app.use(cors());

app.use("/tags", tagRouter)
app.use("/projects", projectRouter)

module.exports = app;