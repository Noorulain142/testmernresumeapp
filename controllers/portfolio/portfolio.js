const { Console } = require("console");
const { Portfolio } = require("../../models/portfolio");
const { Resume } = require("../../models/resume");

const createPortfolio = async (req, res) => {
  try {
    const savedPortfolio = await Portfolio.create(req.body);
    res.status(200).json(savedPortfolio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const getAllPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    if (portfolio) {
      res.status(200).json(portfolio);
    } else {
      res.status(403).send({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getOnePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.portfolioId);
    if (portfolio) {
      res.status(200).json(portfolio);
    } else {
      res.status(403).send({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find({ userId: req.params.id });
    console.log(req.params.id);
    console.log(portfolio);
    if (portfolio) {
      res.status(200).json(portfolio);
    } else {
      res.status(403).send({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ handle: req.params.handle });
    if (portfolio.resume.some((r) => r.id === req.body.resumeData.id)) {
      return res.status(403).json({ message: "Resume Already Present" });
    }

    await portfolio.updateOne({
      $push: { resume: req.body.resumeData },
    });

    res.status(200).json({ message: "portfolio updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    const deletedPortfolio = await portfolio.deleteOne();
    res.status(200).json({ message: "portfolio deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  getAllPortfolio,
  getOnePortfolio,
};
