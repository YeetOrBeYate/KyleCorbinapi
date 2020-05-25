const express = require('express');
const cors = require('cors')

const tagRouter = require("./Tag/tagRouter.js")
const projectRouter = require("./Project/projectRouter.js")
const contactRouter = require("./Contact/ContactRouter.js")

const app = express();


app.use(express.json());
app.use(cors());

app.use("/tags", tagRouter)
app.use("/projects", projectRouter)
app.use('/contact', contactRouter)

module.exports = app;