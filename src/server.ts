import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";

import * as config from "./app/config";
import routes from "./app/routes";
import * as index from "./index";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.middlewared();
    this.routes();
  }

  public config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public middlewared() {}

  public routes() {    
    this.app.use(routes);
  }
}

export default new Server().app;

//
// import * as express from "express";
// import * as http from "http";
// import * as path from "path";
// import * as socketIo from "socket.io";

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// app.use(express.static(path.join(__dirname, "public")));

//
// import * as express from "express";
// import * as http from "http";
// import * as socketIo from "socket.io";
// import axios from "axios";

// const port = process.env.PORT || 4001;
// import index from "./app/routes";
// const app = express();
// app.use(index);
// const server = http.createServer(app);
// const io = socketIo(server); // < Interesting!
