const router = require("express").Router();
const {
  createResume,
  updateResume,
  deleteResume,
  getResume,
  getSingleResume,
} = require("../../controllers/resume/resume");

router.post("/", createResume);
router.put("/:id", updateResume);
router.delete("/:id", deleteResume);
router.get("/:id", getResume);
router.get("/single/:id", getSingleResume);
module.exports = router;
