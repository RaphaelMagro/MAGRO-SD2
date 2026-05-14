
//import the installed module of express
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
// provide name for the server
const server = express();
// Declare server port
const port = 3000;

// Trigger connection to mongoDB thru mongoose
//mongoose.connect("mongodb://localhost:27017/");
mongoose.connect("mongodb+srv://admin:admin123@sd2-magro.c2mcooq.mongodb.net/?appName=SD2-MAGRO");

let db = mongoose.connection;

// Check if connection has error
db.on("error", () => console.error.bind(console, "Cannot connect to MongoDB."));

// Check if connection is okay
db.once("open", () => console.log("MongoDB Atlas Connection Succcess!"));

//Schema -> blueprint

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    isActive: {
        type: Boolean,
        default: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateCompleted: Date,
    status: {
        type: String,
        default: "pending"
    }
});

//Model
const Task = mongoose.model("Task", taskSchema);

// Middewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));


server.get("/home", (req, res) => {
    res.send("Hello from the home endpoint!");
});

server.get("/error", (req, res) => {
    res.status(404).send({
        code: 404,
        message: "Sorry the page cannot be found."
    })
});

server.post("/tasks/add", (req, res) => {

    Task.findOne({name: req.body.name}).then((result) => {
        if(result && result.name === req.body.name){
            res.send("Duplicate found. This task cannot be added!");
        }else{
            let newTask = new Task({
                name: req.body.name,
                description: req.body.description,
                isActive: req.body.isActive,
                dateAdded: req.body.dateAdded,
                dateCompleted: req.body.dateCompleted,
                status: req.body.status
            });

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error saving the task.");
                }else{
                    res.status(201).send({
                        code: 201,
                        message: "Task is now added!",
                        data: savedTask
                    });
                }
            })
        }
    })
});

server.post("/tasks/edit/:taskId", (req, res) => {

    Task.findOne({_id: req.params.taskId}).then((result) => {
        if(result != null){
            result.name = req.body.name;
            result.description = req.body.description;
            result.isActive = req.body.isActive;
            result.dateAdded = req.body.dateAdded;
            result.dateCompleted = req.body.dateCompleted;
            result.status = req.body.status;

            result.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error updating the task.");
                }else{
                    res.status(200).send({
                        code: 200,
                        message: "Task is now updated!",
                        data: savedTask
                    });
                }
            })
        }else{
            res.send("Task not found.");
        }
    })
});

server.post("/tasks/:taskid/mark-complete", (req, res) => {

    Task.findOne({_id: req.params.taskid}).then((result) => {
        if(result != null){
            result.dateCompleted = new Date();
            result.status = "complete";

            result.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error updating the task.");
                }else{
                    res.status(200).send({
                        code: 200,
                        message: "Task is now marked complete!",
                        data: savedTask
                    });
                }
            })
        }else{
            res.send("Task not found.");
        }
    })
});

server.get("/tasks/all", (req, res) => {

    Task.find({}).then((result) => {
        if(result != null){
            res.status(200).send({
                code: 200,
                message: "All tasks retrieved!",
                count: result.length,
                data: result
            });
        }else{
            res.send("No tasks found.");
        }
    })
});

server.get("/tasks/all/completed", (req, res) => {

    Task.find({status: "complete"}).then((result) => {
        if(result && result.length > 0){
            res.status(200).send({
                code: 200,
                message: "All completed tasks retrieved!",
                count: result.length,
                data: result
            });
        }else{
            res.status(200).send({
                code: 200,
                message: "No completed tasks found.",
                count: 0,
                data: []
            });
        }
    }).catch((err) => {
        res.status(500).send({
            code: 500,
            message: "Error retrieving completed tasks.",
            error: err.message
        });
    })
});

server.get("/tasks/all/pending", (req, res) => {

    Task.find({status: "pending"}).then((result) => {
        if(result && result.length > 0){
            res.status(200).send({
                code: 200,
                message: "All pending tasks retrieved!",
                count: result.length,
                data: result
            });
        }else{
            res.status(200).send({
                code: 200,
                message: "No pending tasks found.",
                count: 0,
                data: []
            });
        }
    }).catch((err) => {
        res.status(500).send({
            code: 500,
            message: "Error retrieving pending tasks.",
            error: err.message
        });
    })
});

server.patch("/tasks/all/archive", (req, res) => {

    Task.find({isActive: false}).then((result) => {
        if(result && result.length > 0){
            res.status(200).send({
                code: 200,
                message: "All archived tasks retrieved!",
                count: result.length,
                data: result
            });
        }else{
            res.status(200).send({
                code: 200,
                message: "No archived tasks found.",
                count: 0,
                data: []
            });
        }
    }).catch((err) => {
        res.status(500).send({
            code: 500,
            message: "Error retrieving archived tasks.",
            error: err.message
        });
    })
});

server.patch("/tasks/active/:taskid", (req, res) => {

    Task.findOne({_id: req.params.taskid}).then((result) => {
        if(result != null){
            result.isActive = !result.isActive;

            result.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error updating the task.");
                }else{
                    res.status(200).send({
                        code: 200,
                        message: result.isActive ? "Task is now unarchived!" : "Task is now archived!",
                        data: savedTask
                    });
                }
            })
        }else{
            res.send("Task not found.");
        }
    })
});

server.delete("/tasks/:taskId/delete", (req, res) => {

    Task.findOneAndDelete({_id: req.params.taskId}).then((result) => {
        if(result != null){
            res.status(200).send({
                code: 200,
                message: "Task is now deleted!",
                data: result
            });
        }else{
            res.send("Task not found.");
        }
    })
});

server.listen(port, () => console.log(`Server is now running at port ${port}.`));
