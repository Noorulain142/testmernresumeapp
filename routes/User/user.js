const router = require("express").Router();
const { loginUser } = require("../../controllers/user/registerUser");

router.post("/",loginUser)
module.exports = router;
