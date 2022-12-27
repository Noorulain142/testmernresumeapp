const { Console } = require("console");
const { Resume } = require("../../models/resume");
// const multer = require("multer");
// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, Date.now().toString() + "-" + file.originalname);
//   },
// });
// const upload = multer({
//   storage: Storage,
// }).single("testImage");

const createResume = async (req, res) => {
  const newResume = new Resume(req.body);
  try {
    const savedResume = await newResume.save();
    res.status(200).json(savedResume);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (resume.userId === req.body.userId) {
      await resume.updateOne({ $set: req.body });
      res.status(200).json({ message: "resume updated successfully" });
    } else {
      res.status(403).json({ message: "invalid entry" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteResume = async (req, res) => {
  try {
    console.log(req.params);
    const resume = await Resume.findById(req.params.id);
    console.log(resume);
    const deletedResume = await resume.deleteOne();
    res.status(200).json(deletedResume);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

//delete user
// const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteUser = await User.findByIdAndDelete(id);
//     console.log(deleteUser);
//     res.status(201).json(deleteUser);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

const getResume = async (req, res) => {
  try {
    const resume = await Resume.find({ userId: req.params.id });
    if (resume) {
      res.status(200).json(resume);
    } else {
      res.status(403).send({ message: "Resume not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (resume) {
      res.status(200).json(resume);
    } else {
      res.status(403).send({ message: "Resume not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createResume,
  deleteResume,
  updateResume,
  getResume,
  getSingleResume,
};
