const express = require("express");
const router = express.Router();
const {
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

router.get("/", getQuiz);

router.post("/", createQuiz);

router.put("/:id", updateQuiz);

router.delete("/:id", deleteQuiz);

module.exports = router;
