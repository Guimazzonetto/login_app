const Schema = require("../../schema/login_schema.js");
const bcrypt = require("bcrypt");

module.exports = async (payload) => {
  const register = new Schema({email: payload.email, password: await bcrypt.hash(payload.password, 8)});
  const user = await Schema.findOne({ "email": payload.email })
  if (user == null) {
    register.save(error => {
      if (error) return { status: 400, message: "(ERROR) -> error while create the contact in database." }
    });
    return { status: 200, message: "Contact was created in database." }
  } else return { status: 400, message: "User already exists in database." }
};