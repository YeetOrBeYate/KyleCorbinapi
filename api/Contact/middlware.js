

exports.Checkbody = (req,res,next)=>{
    const body = req.body

    if (body && body.name.length >2 && body.email.length >5 && body.phone.length >= 9){
        next()
    }else{
        res.status(500).json({message:'body is messed up'})
        console.log(body.phone.length)
    }

}