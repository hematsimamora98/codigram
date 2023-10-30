const userRoute = require("express").Router();
const userController = require("../controllers/userController.js");

const userRouter = Router();
userRouter.use("/", userController.getUsers);
userRouter.get("/", userController.detailUsers);
userRouter.get("/", userController.registerUsers);
userRouter.get("/", userController.updateUsers);
userRouter.get("/", userController.deleteUsers);
userRouter.get("/", userController.loginUsers);

module.exports = userRoute;
