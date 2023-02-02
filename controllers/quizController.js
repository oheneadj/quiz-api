const asyncHandler = require("express-async-handler");

/****
 * @description Get all quizzes
 * @route /api/quizzes/
 * @method GET
 * @access Private
 ****/
const getQuiz = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get quizzes",
  });
});

/****
 * @description Create a quizzes
 * @route /api/quizzes/
 * @method POST
 * @access Private
 ****/
const createQuiz = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({
    message: "Create quizzes",
  });
});

/****
 * @description update a quizzes
 * @route /api/quizzes/:id
 * @method PUT
 * @access Private
 ****/
const updateQuiz = asyncHandler(async (req, res) => {
  res.json({
    message: "Update quizzes",
  });
});

/****
 * @description delete a quizzes
 * @route /api/quizzes/:id
 * @method DELETE
 * @access Private
 ****/
const deleteQuiz = asyncHandler(async (req, res) => {
  res.json({
    message: "Delete quizzes",
  });
});

module.exports = { getQuiz, createQuiz, updateQuiz, deleteQuiz };
