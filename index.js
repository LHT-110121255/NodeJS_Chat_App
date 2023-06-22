const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const io = new require("socket.io")(server, {
    cors: {
        origin: "https://example.com",
        methods: ["GET", "POST"]
      }
  });
  
// app.get('/signUp', (req, res) => {
//       res.sendFile(__dirname+ '/signUp.html')
//   })
  
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// server-side
io.on("connection", (socket) => {
    socket.on('on-chat', data => {
        io.emit('use-chat', data);
        console.log(data)
    })
});
server.listen(3000, () => {
    console.log('Succers');
}) 

// file signUp
