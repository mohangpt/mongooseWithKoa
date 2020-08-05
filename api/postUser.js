var user = require("../models/User");

async function postUser(ctx, next) {
  let { email, name, plan } = ctx.request.body;

  let u = new user({ name, email, plan });

  try {
    await u.save();
    console.log("saved user!!");
    ctx.body = "saved";
  } catch {
    console.log("error saving user!!");
    ctx.body = "not saved";
  }
  return next();
}

module.exports = postUser;
