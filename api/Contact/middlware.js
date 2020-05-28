

exports.Checkbody = (req,res,next)=>{
    const body = req.body

    console.log(body)

    if (body && body.name && body.name.length >2 && body.email && body.email.length >5 && body.phone && body.phone.length >= 9 ){
        next()
    }else{
        res.status(406).json({message:'body is messed up'})
    }

}