const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(3500, () => {
  console.log("JSON Server is now running");
});

module.exports = server;