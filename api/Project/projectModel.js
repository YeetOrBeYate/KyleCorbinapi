const db = require("../../data/db-config.js")

const getAll = ()=>{
    return db("portfolio")
    .select('*')
    .from('project')
    .orderBy('id')
}

module.exports = {getAll}