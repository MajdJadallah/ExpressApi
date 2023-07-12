const express = require('express');
const app = express();

app.get('/', (req, res) => {
// console.log("Hello world!");
// console.log("new test");
res.send("Hello From Coding Academy")
// res.sendStatus("500");
// res.status(500).send("HTTP/1.1 500 Internal Server Error");
// res.json({message: 'Hello from Coding'});
// res.json({message: 'Wjdi love coding'});
// res.download("server.js");

// res.sendFile(__dirname + '/index.html')
});

// app.get('/users', (req, res) => {
//     res.send("UserList")
// });

// app.get('/users/new', (req, res) => {
//     res.send("User new list")
// });

const userRouter = require('./routes/users')
app.use("/users",userRouter);

app.listen(8090,() => {
    console.log('Server listening on port 8090');
});