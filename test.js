var user = require("./models/User");
var connection = require("./models/Connection");

const mongoose = require("mongoose");

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

// var U = model.User;
// var C = model.connection;

var mohan = new user({ name: "Mohan", email: "mohan@deve", plan: "free" });

var mohanConnection = new connection({
  shopifyTokem: "fafkajhfanbaukdflhg;irhofiarg",
  user: mohan,
});

const saveMultiple = async (arr) => {
  try {
    await arr[0].save();
    await arr[1].save();
    // await arr[0].save()
    console.log("all done");
    return "done";
  } catch {
    console.log("error occured");
    return "d";
  }
};

saveMultiple([mohan, mohanConnection]).then((r) => console.log(r));
