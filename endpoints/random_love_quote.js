// Random Love Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/love', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Love");
    res.json(randomQuote);
});

module.exports = router;