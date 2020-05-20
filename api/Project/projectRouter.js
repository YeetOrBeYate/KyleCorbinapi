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

//This endpoint was mainly used for testing. I dont think I'll really need it so I'll keep it until I'm finnished
router.get('/:id', (req,res)=>{
    let id = req.params.id
    qs.getTags(id)

    .then(tags=>{
        res.status(201).json({tags})
    })

    .catch(err=>{
        res.status(401).json(err)
    })
})

module.exports = router