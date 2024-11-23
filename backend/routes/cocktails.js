const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const cocktails = [
    { id: 1, name: "Margarita", description: "A refreshing cocktail." },
    { id: 2, name: "Martini", description: "A classic cocktail." },
  ];
  res.json(cocktails);  // Send response as JSON
});

module.exports = router;
