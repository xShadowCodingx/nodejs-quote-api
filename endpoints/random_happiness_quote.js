// Random Happiness Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/happiness', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Happiness");
    res.json(randomQuote);
});

module.exports = router;