// Random Motivational Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/motivational', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Motivational");
    res.json(randomQuote);
});

module.exports = router;