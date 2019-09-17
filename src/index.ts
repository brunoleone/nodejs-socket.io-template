import axios from "axios";
import * as http from "http";
import * as socketIo from "socket.io";
import { PORT } from "./app/config";
import * as app from "./server";

const server = http.createServer(app.default);
const io = socketIo.listen(server);

let interval;
const getApiAndEmit = async (socket: socketIo.Socket) => {
  try {
    //   Faremos a requisição a api
    const res = await axios.get("");
    socket.emit("fromApi", res.data);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => this.getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
