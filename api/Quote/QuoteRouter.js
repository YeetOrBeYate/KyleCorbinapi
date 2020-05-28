const express = require('express')
const qs = require('./QuoteModel.js')
const router = express.Router()


router.get('/',(req,res)=>{


    let id = Math.floor(Math.random() * 26)
    
    if(id ===0){
        id = 21
    }

    qs.getbyId(id)

    .then(obj=>{
        res.status(200).json(obj)
    })

    .catch(err=>{
        res.status(500).json(err)
    })

})

module.exports = router