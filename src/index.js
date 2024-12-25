const express = require('express');
const bodyParser = require('body-parser')
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

// const PORT = 3000;   //34.5.34.5:3000 => IPAddress:PORT => to run in other computers , to run in ur system which consists the backend and the software needs to communicate with the files which is there in ur pc , we dont need a IP but a localhost in place of it.
const app = express();

//middleware
app.use(bodyParser.json());  //it reads the req of JSON format
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());


app.post('/ping',(req,res) => {
  console.log(req.body);
  return res.json({message: "pong"});
})

app.listen(serverConfig.PORT, async() => {
  await connectDB();
  console.log(`Server started at port ${serverConfig.PORT}`);
});
