const express = require('express')
const qs = require("./projectModel.js")

const router = express.Router()

router.get('/',(req,res)=>{
    qs.getAll()
    .then(projects=>{
        res.status(200).json({projects})
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

module.exports = router