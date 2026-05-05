// import the installed module of express
const express = require('express');
// import mongoose module
const mongoose = require('mongoose');
// provide name for the server
const server = express();
// declare server port
const port = 5000;






server.listen(port, () => console.log(`Server is now running at port ${port}.`));