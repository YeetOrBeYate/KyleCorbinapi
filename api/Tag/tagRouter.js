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
        console.log(err)
    })
})

router.get('/:id', (req,res)=>{
    let id = req.params.id
    qs.filterbyTag(id)

    .then(projects=>{
        res.status(200).json({projects})
    })

    .catch(err=>{
        res.status(500).json(err)
        console.log(err)

    })
})

module.exports = router