const db = require('../../data/db-config.js')


const insertEmail = (email)=>{
    return db('email')
    .returning('id')
    .insert(email)
}

const errorEmail = (id)=>{
    return db('email')
    .where('id', id)
    .update('error', new Date().toString())
}

module.exports = {
    insertEmail,
    errorEmail
}