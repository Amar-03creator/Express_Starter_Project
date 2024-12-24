const express = require('express');
const serverConfig = require('./config/serverConfig');

// const PORT = 3000;   //34.5.34.5:3000 => IPAddress:PORT => to run in other computers , to run in ur system which consists the backend and the software needs to communicate with the files which is there in ur pc , we dont need a IP but a localhost in place of it.
const app = express();

app.listen(serverConfig.PORT,() => {
  console.log(`Server started at port ${serverConfig.PORT}`);
});
