

const axios = require('axios');
const cheerio = require('cheerio');

// URL of the specific movie page (replace with an actual movie URL)
const url = 'https://www.imdb.com/title/tt0111161/'; // Example: The Shawshank Redemption

// Function to scrape the data
const scrapeData = async () => {
    try {
        // Fetch the HTML of the page with a User-Agent header
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        // Load the HTML into Cheerio
        const $ = cheerio.load(data);
        
        // Extract the movie name
        const movieName = $('h1').text().trim();
        
        // Extract the language data (you may need to adjust the selector)
        const language = $('a[href^="/search/title?languages="]').first().text().trim();
        
        console.log('Movie Name:', movieName);
        console.log('Language:', language);

    } catch (error) {
        console.error('Error scraping the page:', error);
    }
};

// Execute the scrape function
scrapeData();



