const validator = require("validator");

module.exports = (payload) => {
  if (Object.keys(payload).length !== 0) {
    if (payload.email && payload.password && typeof payload.email == "string" && typeof payload.password == "string"){
      if (validator.isEmail(payload.email)) {
        return {
          status: 200,
          data: {
            email: payload.email,
            password: payload.password
          }
         };
      } else return { status: 400, data: "E-mail format invalid"};
    } else return { status: 400, data: "Missing fields or format e-mail and password is wrong."};
  } else return { status: 400, data: "The body is empty."};
};