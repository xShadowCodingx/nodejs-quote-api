// Random Love Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

const serverSettings = require('../configuration/server_settings');

router.get('/love', (req, res) => {
    // If the endpoint is disabled in server settings, return 503
    if(serverSettings.getActiveEndpoints()["getlovequote"] !== true) {
        return res.status(503).json({ error: "503 - Love quotes endpoint is currently disabled." });
    }

    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Love");
    res.json(randomQuote);
});

module.exports = router;