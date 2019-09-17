import * as express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {  
  res.send({ response: "HTTP SERVER STATUS: OK" }).status(200);
});

export default routes;
