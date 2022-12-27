const router = require("express").Router();
const { authUser } = require("../../controllers/user/authUser");

router.post("/", authUser);
module.exports = router;
   