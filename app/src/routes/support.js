const express = require("express");
const router = express.Router();

router.post("/support", (req, res) => {
  return res.json({ message: "Helloooo" });
});

module.exports = router;
