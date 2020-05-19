const express = require('express')
const qs = require('./tagModel.js')

const router = express.Router()

router.get('/', (req,res)=>{
    qs.getAllTags()
    .then(tags=>{
        res.status(200).json({tags})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

module.exports = router