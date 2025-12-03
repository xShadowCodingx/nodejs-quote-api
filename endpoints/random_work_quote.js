// Random Work Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

router.get('/work', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Work");
    res.json(randomQuote);
});

module.exports = router;