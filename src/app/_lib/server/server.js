const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  console.log("Request Received");
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  next();
});
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
