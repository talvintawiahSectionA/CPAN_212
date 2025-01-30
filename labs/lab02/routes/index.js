const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Lab 02 Solution");
});

router.get("/name", (req, res) => {
  res.send("Talvin Tawiah");
});

router.get("/greeting", (req, res) => {
  res.send("Talvin Tawiah - n01710757");
});

router.get("/add", (req, res) => {
  const { x, y } = req.query;
  if (!x || !y) {
    return res.status(400).send("Missing query parameters x and y");
  }
  const result = parseFloat(x) + parseFloat(y);
  res.send(`Sum: ${result}`);
});

router.get("/calculate", (req, res) => {
  const { a, b, operation } = req.query;
  if (!a || !b || !operation) {
    return res.status(400).send("Missing query parameters a, b, and operation");
  }

  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0)
        return res.status(400).send("Division by zero is not allowed");
      result = num1 / num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
      return res.status(400).send("Invalid operation");
  }

  res.send(`Result: ${result}`);
});

module.exports = router;
