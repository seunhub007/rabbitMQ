const express = require("express");
const Producer = require("./producer");

const server = express(); // create a new express server app

// middleware
server.use(express.json());
//create a new producer
const producer = new Producer();

//route
server.get("/hello", (req, res) => {
    res.status(200).send({
        message: "Everything Works fine",
        code: "success"
    })
})

// send a message to the broker
server.post("/send-message",async (request, response) => {
    let message_title = request.body.message_title.trim();
    let message_content = request.body.content.trim();

    if (message_title.length > 0 && message_content.length > 0){
        //proceed to sending message to the broker
        let message = "This is a sample message"
        await producer.publishMessage("simple-routing-key", message)

        response.status(201).send({
            message: "Message sent successfully",
            code: "success",
            data: message
        })
    }
})

//server needs to be listening
server.listen(1234, () => {
    console.log("server is listening on port 1234");
})
