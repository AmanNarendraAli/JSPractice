let nodemailer = require("nodemailer");
let fs = require("fs");
let mailtext = ""
fs.readFile('wassup.txt',function(err,data)
{
    mailtext = data;
    // the part below is the important part for using nodemailer, I've just stuck it inside readFile for now
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "email@gmail.com",
            pass:"pw"
        }
    });
    let mailoptions = {
        from: "email@gmail.com",
        to: "devanshmathurdm@gmail.com",
        subject: "mota",
        text: mailtext
    };
    transporter.sendMail(mailoptions,  function (error,info){
        if (error){
            console.log(error);
        }
        else{
            console.log('Email sent' + info.response);
        }
    })
})
