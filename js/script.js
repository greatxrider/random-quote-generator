/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    source: "Cory House",
    citation: "",
    year: "2012",
    topic: "Programming Humor"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    source: "Alan Kay",
    citation: "Speech at Xerox PARC",
    year: "1971",
    topic: "Innovation"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    source: "John Johnson",
    citation: "Programming Pearls",
    year: "1990",
    topic: "Problem Solving"
  },
  {
    quote: "If you think it’s simple, then you have misunderstood the problem.",
    source: "Bjarne Stroustrup",
    citation: "The C++ Programming Language",
    year: "1986",
    topic: "Software Complexity"
  },
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    source: "Chris Pine",
    citation: "",
    year: "2006",
    topic: "Learning Programming"
  }
];

/*** 
 * `colors` array 
***/
const colors = [
  'orange',
  'black',
  'blue',
  'green',
  'purple',
  'red',
  'yellow',
  'brown',
  'pink',
  'teal',
  'gray',
  'cyan'
];

/**
 * Generates a random quote from the 'quotes' array.
 * @returns {object} A random quote object containing 'quote', 'source', 'citation', and 'year'.
 */
const getRandomQuote = () => {
  // Generate a random index within the range of the 'quotes' array length
  let randomNumber = Math.floor(Math.random() * quotes.length);

  // Return the quote object at the random index
  return quotes[randomNumber];
};

/**
 * Generates a random color from the 'colors' array.
 * @returns {string} A random color name from the array.
 */
const getRandomColor = () => {
  // Generate a random index within the range of the 'colors' array length
  let randomIndex = Math.floor(Math.random() * colors.length);

  // Return the color name at the random index
  return colors[randomIndex];
};

/**
 * Updates the background color of the body to a random color.
 */
const updateBackgroundColor = () => {
  // Generate a random color for the background
  let randomColor = getRandomColor(); // Retrieves a random color from the colors array

  // Select the body element using querySelector
  const body = document.querySelector('body');

  // Set the background color of the body
  body.style.backgroundColor = randomColor;
};

/***
 * `printQuote` function
***/
const printQuote = () => {
  // Update background color
  updateBackgroundColor();

  // Get a random quote object using the getRandomQuote function
  let randomQuote = getRandomQuote();

  // Construct HTML markup for displaying the quote
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // Add citation span if citation is available in the quote object
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // Add year span if year is available in the quote object
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.topic) {
    html += `<span class="topic">${randomQuote.topic}</span>`;
  }

  // Close the 'source' paragraph tag
  html += `</p>`;

  // Update the HTML content of the element with id 'quote-box'
  document.getElementById('quote-box').innerHTML = html;
};

/***
 * `autoRefreshQuote ` function
***/
const autoRefreshQuote = () => {
  setInterval(() => {
    printQuote(); // Call the printQuote function to display a new quote
  }, 10000); // Set interval to a random time between 10 to 20 seconds
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Initial call to start auto-refreshing quotes
autoRefreshQuote();
