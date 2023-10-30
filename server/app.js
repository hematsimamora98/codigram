require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 1234;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`app is listenign on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
