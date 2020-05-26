const express = require('express')
require('dotenv').config()
const nodemailer = require('nodemailer')
const router = express.Router()


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env['gmailUser'],
        pass:process.env['gmailPass']
    }

})

//email that is sent to the pospect confirming we got their message
let mailOptions = {
    from: process.env['gmailUser'],
    to:'variable',
    subject: "Thank you for contacting me",
    text:'This is a confirmation email, please do not reply. You should expect and email from me very shortly!'
}

//email to my personal account to let me know what the prospect said
let userOptions = {
    from: process.env['gmailUser'],
    to:process.env['personalGmail'],
    subject:'variable',
    html:'variable'
}

let d = new Date()

console.log(d.toString())

//I'll need middleware to make sure each req has a name, email, and phone
router.post('/', (req,res)=>{

    // res.status(200).json(body)

    let body= req.body
    body.date = new Date().toString()
    


    mailOptions.to = body.email
    userOptions.subject = `Portfolio message from ${body.name}!`
    userOptions.html = `
    <h2>Name: ${body.name}</h2>
    <h2>Email: ${body.email}</h2>
    <h2>Phone: ${body.phone}</h2>
    <p>Message: ${body.message}</p>
    <p>date: ${body.date}</p>
    `

    if(body.name ==="fail"){
        res.status(401).json(body)
    }


    transporter.sendMail(mailOptions,(err,data)=>{

        if(err){
            console.log(err)
            res.status(401).json(body)
        }else{
            transporter.sendMail(userOptions,(err,data)=>{
                if(err){
                    console.log(err)
                    res.status(401).json(body)
                }else{
                    res.status(200).json(body)
                }
            })
        }
    })

        



})

module.exports = router