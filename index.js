const quoteUtil = require('./utilities/quote_util');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/random-quote', (req, res) => {
    let randomQuote = quoteUtil.getRandomQuote(quoteUtil.getQuotes(), quoteUtil.getRandomCategory());
    res.json(randomQuote);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});