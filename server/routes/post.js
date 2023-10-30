const postRoute = require("express").Router();
const postController = require("../controllers/postController.js");

const postRouter = Router();

postRouter.use("/", postController.getUsers);
postRouter.get("/:id", postController.deletePost);
postRouter.get("/", postController.createPost);
postRouter.get("/:id", postController.updatePost);
postRouter.get("/:id", postController.deletePost);

postRoute.module.exports = postRoute;
