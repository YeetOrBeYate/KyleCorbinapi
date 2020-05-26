const express = require('express')
require('dotenv').config()
const nodemailer = require('nodemailer')
const router = express.Router()

const middleware = require('./middlware.js')

const qs = require('./ContactModel.js')

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



router.post('/', middleware.Checkbody, (req,res)=>{

    
    // variables needed for processing this request
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
    // meat of the endpoint
    qs.insertEmail(body)

    .then((email)=>{
        let id = email[0]

        //sending the confirmation to client
        transporter.sendMail(mailOptions,(err,data)=>{
            if(err){
                qs.errorEmail(id)
                .then(email=>{
                    res.status(401).json(email)
                })
                .catch(err=>{
                    res.status(401).json(err)
                })
            }else{
                //sending the email to my professional email so I can respond to them
                transporter.sendMail(userOptions,(err,data)=>{
                    if(err){
                        qs.errorEmail(id)
                        .then(email=>{
                            res.status(401).json(email)
                        })
                        .catch(err=>{
                            res.status(401).json(err)
                        })
                    }else{
                        //only when both emails are sent, will the client get confirmation from the portfolio site
                        res.status(200).json(body)
                    }
                })
            }
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(401).json(err)
    })

})

module.exports = router