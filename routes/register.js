const router = require("express").Router();

//* Functions

const validateFields = require("../services/utils/validate_fields.js");
const create_register = require("../services/database/create_register.js");

//* Rotas

router.post("/new", async function (req, res) {
  const { status, data } = validateFields(req.body);
  if (status == 200){
    const { status, message } = await create_register(data);
    res.status(status).send(message);
  } else {
    res.status(status).send(data);
  };
});

module.exports = router;