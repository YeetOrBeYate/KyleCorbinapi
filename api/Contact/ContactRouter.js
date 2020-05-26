const express = require('express')

const router = express.Router()

router.post('/', (req,res)=>{

    const body= req.body 


    if(body.name !=="fail"){
        res.status(200).json(body)
    }else{
        res.status(401).json(body)
    }


})

module.exports = router