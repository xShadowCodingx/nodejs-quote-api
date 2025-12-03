// Random Life Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/life', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Life");
    res.json(randomQuote);
});

module.exports = router;