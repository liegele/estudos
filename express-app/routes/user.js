const express = require('express');

const router = express.Router();

router
  .get('/', (req, res) => {
    res
      .status(200)
      .json({ success: true, message: 'All right. Job well done!' });
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `User ID: ${id}` });
  });

module.exports = router;
