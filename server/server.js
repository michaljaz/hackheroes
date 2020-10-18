const express = require("express");
const socket = require("socket.io");

const PORT = 8080;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection");
});
