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

//ignore above comment, I'm now using it for getting one project fro the database
router.get('/:id', (req,res)=>{
    let id = req.params.id
    qs.getbyid(id)

    .then(project=>{
        res.status(201).json(project)
    })

    .catch(err=>{
        res.status(401).json(err)
    })
})

module.exports = router