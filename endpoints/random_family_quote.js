// Random Family Quote endpoint

const express = require('express');
const router = express.Router();

const quoteUtil = require('../utilities/quote_util');
const allQuotes = quoteUtil.getQuotes();

const serverSettings = require('../configuration/server_settings');

router.get('/family', (req, res) => {
    // If the endpoint is disabled in server settings, return 503
    if(serverSettings.getActiveEndpoints()["getfamilyquote"] !== true) {
        return res.status(503).json({ error: "503 - Family quotes endpoint is currently disabled." });
    }

    let randomQuote = quoteUtil.getRandomQuote(allQuotes, "Family");
    return res.json(randomQuote);
});

module.exports = router;