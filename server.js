const express = require('express');
const graphy = require("./Graph/GraphRouter.js")
// const express_graphql = require('express-graphql')
// const {buildSchema} = require('graphql')

// //Graphql Schema
// const schema = buildSchema(`
//     type Query{
//         message: String
//     }
// `)
// // Root resolver
// const root = {
//     message:()=> 'Hellow World!'
// }

//Actual server
const app = express();

app.use('/graphql', graphy)

app.listen(4000, ()=>console.log('listening on port 4000'))