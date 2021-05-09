const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOCONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // no entrega nada la conexion de mongo
  })
  .catch((err) => {
    console.error(err);
  });
