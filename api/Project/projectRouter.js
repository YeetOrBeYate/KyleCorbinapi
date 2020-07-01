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


//ignore above comment, I'm now using it for getting one project from the database
router.get('/:id', (req,res)=>{
    let id = req.params.id
    qs.getbyid(id)

    .then(project=>{
        res.status(201).json(project)
    })

    .catch(err=>{
        console.log(err)
        res.status(401).json(err)
    })
})

module.exports = router