const router = require("express").Router();
const {
  createPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  getAllPortfolio,
  getOnePortfolio,
} = require("../../controllers/portfolio/portfolio");

router.post("/", createPortfolio);
router.get("/:id", getPortfolio);
router.get("/", getAllPortfolio);
router.put("/:handle", updatePortfolio);
router.delete("/:id", deletePortfolio);
router.get("/single/:portfolioId", getOnePortfolio);

module.exports = router;
