const express = require("express");
const router = express.Router();

router.get("/aaa", (req, res) => {
  res.status(200).json({ message: "aaaa" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ message: req.params.id });
});

module.exports = router;
