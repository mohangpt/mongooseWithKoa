const postUser = require("./api/postUser");
const getUser = require("./api/getUser");
const Koa = require("koa");
const koaRouter = require("koa-router");
const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new koaRouter();
app.use(bodyParser());

// writting router here
router
    .post("/api/user", postUser)
    .get("/api/user", getUser)
// .post("/api/conn")
// .get("/api/conn");

// response
app.use(router.routes()).use(router.allowedMethods());

//  connect server to mongoDb
mongoose.connect(
  "mongodb+srv://mohan:mohan@cluster0.k5nzr.gcp.mongodb.net/mohantest1?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("we are connected");
});

app.listen(3000, () => console.log("server is started on 3000"));
