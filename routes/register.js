const router = require("express").Router();

//* Functions

const validateFields = require("../services/utils/validate_fields.js");
const createRegister = require("../services/database/create_register.js");

//* Rotas

router.post("/new", async function (req, res) {
  let { status, data } = await validateFields(req.body);
  if (status == 200){
    let { status, message } = await createRegister(data);
    res.status(status).send(message);
  } else {
    res.status(status).send(data);
  };
});

module.exports = router;