const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

//twilio requirements ---Texting API
const accountSid = ' __YOUR__ACCOUNT__SID';
const authToken = '__YOUR__AUTHENTICATION__TOKEN';
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//welcome page for the server
app.get('/',(req, res) => {
    res.send('Welcome to the express server')
})

//Twilio
app.get('/send-text', (req, res) => {
    //welcome message
    res.send('Hello to the Twilio Server')

    //_Get Variable
    const {recipient, textmsg } = req.query;

    //send Text
    client.messages.create({
        body:textmsg,
        to: recipient, //Text this number
        from:'+15074734314' // From a valid Twilio number

    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))