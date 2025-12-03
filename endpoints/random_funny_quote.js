// Random Funny Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/funny', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Funny");
    res.json(randomQuote);
});

module.exports = router;