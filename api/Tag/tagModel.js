const db = require("../../data/db-config.js");

const getAllTags = ()=>{
    return db('portfolio')
    .select('name')
    .from('tag')
    .orderBy('id')

}

module.exports = {getAllTags}