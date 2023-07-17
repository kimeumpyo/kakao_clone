const express = require("express");
const app = express();
app.use(cors());

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    mathods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
}); // 연결확인