var user = require("../models/User");
async function getUser(ctx, next) {
  try {
    let u = await user.find();
    console.log(JSON.stringify(u));
    ctx.body = JSON.stringify(u);
    return next();
  }catch{
      console.error();
      ctx.body = "error while fetching list";
      return next();
  }
}

module.exports = getUser;
