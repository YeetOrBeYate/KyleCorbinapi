const express = require('express')

const router = express.Router()

router.post('/', (req,res)=>{

    const body= req.body 

    res.status(200).json(body)

})

module.exports = router