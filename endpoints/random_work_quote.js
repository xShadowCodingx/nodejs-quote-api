// Random Work Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

const serverSettings = require('../configuration/server_settings');

router.get('/work', (req, res) => {
    // If the endpoint is disabled in server settings, return 503
    if(serverSettings.getActiveEndpoints()["getworkquote"] !== true) {
        return res.status(503).json({ error: "503 - Work quotes endpoint is currently disabled." });
    }

    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Work");
    res.json(randomQuote);
});

module.exports = router;