const express = require('express');
const { createUser } = require('../controllers/usercontroller');

//We have to initialise a router object to add routes to a new file
//Routers are used for seggregeting your routes in different modules
const userRouter = express.Router();

userRouter.post('/', createUser)   //This is a route registration and will get hit if there is nothing after /users

module.exports = userRouter  //To export a function we export it in curly braces
//We export userrouter to the server (index.js)