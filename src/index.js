const express = require('express');
const bodyParser = require('body-parser')
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema');
const userRouter = require('./routes/userRoutes');

// const PORT = 3000;   //34.5.34.5:3000 => IPAddress:PORT => to run in other computers , to run in ur system which consists the backend and the software needs to communicate with the files which is there in ur pc , we dont need a IP but a localhost in place of it.
const app = express();

//middleware
app.use(bodyParser.json());  //it reads the req of JSON format
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());


//Routing middlewares
//If your request starts with '/users' then it will hit userrouter and will get handled
app.use('/users',userRouter);

app.post('/ping',(req,res) => {
  console.log(req.body);
  return res.json({message: "pong"});
})

app.listen(serverConfig.PORT, async() => {
  await connectDB();
  console.log(`Server started at port ${serverConfig.PORT}`);

  // const newUser = await User.create({
  //   email: 'dhj@ds.com',
  //   password: '122334',
  //   firstName: 'John545',
  //   lastName: 'doe544',
  //   mobileNumber: '9876543218'
  // });
  // console.log('Created new user');
  // console.log(newUser);
});
