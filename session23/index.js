// import the installed module of express
const express = require('express');
// import mongoose module
const mongoose = require('mongoose');
// provide name for the server
const server = express();
// declare server port
const port = 5000;

// Trigger Connection to MongoDB through Mongoose
mongoose.connect("mongodb://localhost:27017/")

let db = mongoose.connection; 

// check if connection has error
db.on("error", () => console.error.bind("Cannot connect to MongoDB"));
// check if okay
db.once("open", () => console.log("Connected to MongoDB"));

// Schema -> blueprint
const taskSchema = new mongoose.Schema({
    title: String,
    status: {
        type: String,
        default: "pending"
    }
}); 

// Model -> collection
const Task = mongoose.model("Task", taskSchema);

// Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.listen(port, () => console.log(`Server is now running at port ${port}.`));

server.get("/home", (req, res) => {
    res.send("Welcome to the Home Page!");
});

server.get("/error", (req, res) => {
    res.status(404).send("Page Not Found!");
});

server.post("/tasks/add", (req, res) => { 
    let newTask = new Task({
        name: "Test"
    }); 

    console.log(newTask);

    newTask.save().then((savedTask, saveErr) => {
        if (saveErr) {
            res.send("Error saving task to database.");
        } else {
            res.status(201).send({
                code: 201,
                message: "Task is now added!",
                data: savedTask
            });  
        }
    })
});