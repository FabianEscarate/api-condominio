const { app, express } = require("./app.js");
const http = require("http")

app.set("port", process.env.PORT)

const server = http.createServer(app)

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `App listening on http://${process.env.HOST}:${process.env.PORT}`
  );
});
