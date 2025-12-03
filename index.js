// Main Entry Point for the Quote API Server

const serverSettings = require('./configuration/server_settings');

const express = require('express');
const app = express();

// Endpoint Imports
const randomQuoteEndpoint = require('./endpoints/random_quote');
const motivationalQuoteEndpoint = require('./endpoints/random_motivational_quote');
const workQuoteEndpoint = require('./endpoints/random_work_quote');
const lifeQuoteEndpoint = require('./endpoints/random_life_quote');
const loveQuoteEndpoint = require('./endpoints/random_love_quote');
const happinessQuoteEndpoint = require('./endpoints/random_happiness_quote');
const familyQuoteEndpoint = require('./endpoints/random_family_quote');
const funnyQuoteEndpoint = require('./endpoints/random_funny_quote');

// Endpoint Declarations
app.use('/api/quote', randomQuoteEndpoint);
app.use('/api/quote', motivationalQuoteEndpoint);
app.use('/api/quote', workQuoteEndpoint);
app.use('/api/quote', lifeQuoteEndpoint);
app.use('/api/quote', loveQuoteEndpoint);
app.use('/api/quote', happinessQuoteEndpoint);
app.use('/api/quote', familyQuoteEndpoint);
app.use('/api/quote', funnyQuoteEndpoint);

app.listen(serverSettings.getPort(), () => {
    console.log(`${serverSettings.getServerName()} is running on port ${serverSettings.getPort()}`);
});