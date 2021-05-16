const mongoose = require("mongoose");

const connection = mongoose.createConnection(process.env.MONGOCONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 2000,
  waitQueueTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
});

connection.on("error", (error) => {
  console.log(error);
  throw "Can't connect to Database";
});

module.exports = {
  connection: connection,
  modelInstance: mongoose.model,
  schemaInstance: mongoose.Schema,
  SchemaTypes: mongoose.SchemaTypes,
};
