const Schema = require("../../schema/login_schema.js");
const bcrypt = require("bcrypt");

module.exports = async (payload) => {
  const user = await Schema.findOne({"email": payload.email});
  if(user) {
      if(await bcrypt.compare(payload.password, user.password)) {
        return {
          status: 200,
          message: "User authenticated."
        }
      } else return {status: 400, message: "Wrong password."}
  } else return {status: 400, message: "User not found."};
};