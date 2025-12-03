# Node.js Quote API

A lightweight Express-based API that serves random quotes from categorized JSON data. The project provides a small set of endpoints for fetching random quotes by category or a random quote from any available category.

## Features

- Serve random quotes from `quotes/Quotes.json`
- Category-based endpoints (e.g. `/api/quote/motivational`)
- Simple, dependency-light implementation (Express)
- Development-friendly auto-reload via `nodemon`

## Quick start

Install dependencies and start the server (development):

```powershell
npm install
npm start
```

Notes:
- The project's entry point is `index.js`.
- `npm start` runs `nodemon index.js` (development auto-reload). For production, run the server with Node directly (for example: `node index.js`) or use a process manager.

## API Endpoints

All endpoints return JSON. Example endpoints included in this project:

- `GET /api/quote/random` — return a random quote from any category
- `GET /api/quote/motivational` — return a random motivational quote
- `GET /api/quote/work` — return a random work quote
- `GET /api/quote/life` — return a random life quote
- `GET /api/quote/love` — return a random love quote
- `GET /api/quote/happiness` — return a random happiness quote
- `GET /api/quote/family` — return a random family quote
- `GET /api/quote/funny` — return a random funny quote

Responses are JSON objects containing the quote text (and any other fields the project provides).

## Utilities

See `utilities/quote_util.js` for helper functions used by the API. Key functions include:

- `getQuotes()` — read and parse `quotes/Quotes.json`
- `getRandomCategory()` — select a category at random
- `getRandomQuote(quotes, category)` — select a random quote for the given category

## Configuration

Server settings are stored in `configuration/ServerSettings.json`. Typical attributes you may find or add:

- `servername` (string) — descriptive name for the API
- `port` (number) — port the app listens on (e.g. `3000`)
- `usekeys` (boolean) — whether API key authentication is enabled
- `ssl` (boolean) — whether the server should use SSL (if implemented)
- `apikeys` (array) — optional list of API keys for testing
- `activeapiendpoints` (object) — enable/disable specific endpoints

If you change `ServerSettings.json` while the server is running, restart the server (or use `nodemon` in development to auto-reload on file save).

## Contributing

Contributions and improvements are welcome. Please open an issue or submit a pull request with a clear description of the change.

## License

This project is released under the ISC License. See `package.json` for author and license information.