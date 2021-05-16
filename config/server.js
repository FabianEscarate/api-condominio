const { app, express } = require("./app.js");

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `App listening on http:\\${process.env.HOST}:${process.env.PORT}`
  );
});
