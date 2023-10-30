const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: "Selamat datang",
  });
});

// const userRoute = require("./userRoutes");
// route.use("/user", userRoute);

// const postRoute = require("./postRoutes");
// route.use("/post", postRoute);

module.exports = route;
