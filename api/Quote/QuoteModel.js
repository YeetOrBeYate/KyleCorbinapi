const db = require('../../data/db-config.js')


const getbyId = (id)=>{
    return db('portfolio')
    .select('line', 'author')
    .from('quote')
    .where('id', id)
    .first()
}

module.exports = {
    getbyId
}