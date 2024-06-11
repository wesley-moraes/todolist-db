const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
//const port = process.send.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running')
})