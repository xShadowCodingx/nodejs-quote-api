// Random Family Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/family', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Family");
    res.json(randomQuote);
});

module.exports = router;