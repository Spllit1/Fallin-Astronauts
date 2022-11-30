// some imports
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server);

// uses static site from /public
app.use(express.static("public"));


io.on("connect", function(socket) {
  console.log("User joined")
  socket.on("disconnect", function() {
    console.log("User left")
  })

})


server.listen(port, function() {
  console.clear()
  console.log("🟢 " + port);
});


io.on("move", function(pos){
  
})