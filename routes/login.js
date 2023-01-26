const router = require("express").Router();

//* Functions

const validateFields = require("../services/utils/validate_fields.js");
const validateUser = require("../services/database/validate_user.js");

//* Routes

router.post("/authenticate", async function(req, res) {
  let { status, data } = await validateFields(req.body);
  if(status == 200) {
    let { status, message } = await validateUser(data);
    res.status(status).send(message);
  } else {
    res.status(status).send(message);
  }
});

module.exports = router;