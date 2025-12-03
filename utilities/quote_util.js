// Quote Utility Class and Methods

const fs = require('fs');

class QuoteUtil {
    // Get all quotes from the JSON file
    static getQuotes() {
        const quoteData = JSON.parse(fs.readFileSync('quotes/Quotes.json', 'utf8'));
        return quoteData;
    };

    // Get random category
    static getRandomCategory() {
        // Randomly choose what category (There are 6)
        const randomNum = Math.floor(Math.random() * 7) + 1;
        let category = "";
        switch (randomNum) {
            case 1:
                category = "Motivational";
                break;
            case 2:
                category = "Work";
                break;
            case 3:
                category = "Life";
                break;
            case 4:
                category = "Love";
                break;
            case 5:
                category = "Happiness";
                break;
            case 6:
                category = "Family";
                break;
            case 7:
                category = "Funny";
                break;
        };
        return category;
    };

    // Get a random quote from the parsed JSON string
    static getRandomQuote(quotes, category) {

        // Select a random quote from the chosen category
        let selectedQuotes = quotes[category];
        const randomIndex = Math.floor(Math.random() * selectedQuotes.length);
        const randomQuote = selectedQuotes[randomIndex]["quote"];
        return {category: category, quote: randomQuote};
    };
};

module.exports = QuoteUtil;