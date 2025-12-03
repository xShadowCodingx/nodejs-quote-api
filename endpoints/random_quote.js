// Random Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/random', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, quoteUtil.getRandomCategory());
    res.json(randomQuote);
});

module.exports = router;