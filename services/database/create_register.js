const Schema = require("../../schema/login_schema.js");

module.exports = async (payload) => {
  const register = new Schema(payload);
  const user = await Schema.findOne({ "email": payload.email })
  console.log(user);
  if (user == null) {
    register.save(error => {
      if (error) return { status: 400, message: "(ERROR) -> error while create the contact in database." }
    });
    return { status: 200, message: "Contact was created in database." }
  } else return { status: 400, message: "User already exists in database." }
};