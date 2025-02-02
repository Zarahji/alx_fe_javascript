// script.js

// Array to hold quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
  ];
  javascript
  document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      { text: 'The best way to predict the future is to invent it.', category: 'Inspiration' },
      { text: 'Life is what happens when you’re busy making other plans.', category: 'Life' },
      // Add more quotes here
    ];
  
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuote');
    const newQuoteText = document.getElementById('newQuoteText');
    const newQuoteCategory = document.getElementById('newQuoteCategory');
  
    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      quoteDisplay.innerHTML = `<p>${quote.text}</p><p><em>Category: ${quote.category}</em></p>`;
    }
  
    function addQuote() {
      const text = newQuoteText.value;
      const category = (newQuoteCategory.value);
      // JavaScript code to check for the existence of requisite files
function checkFilesExist(files) {
    const existingFiles = [];
  
    files.forEach(file => {
      fetch(file)
        .then(response => {
          if (response.ok) {
            existingFiles.push(file);
            console.log(`File exists: ${file}`);
          } else {
            console.warn(`File not found: ${file}`);
          }
        })
        .catch(error => console.error(`Error checking file: ${file}`, error));
    });
  }
  
  // List of files to check
  const filesToCheck = ['index.html', 'script.js'];
  
  // Check for the existence of the files
  checkFilesExist(filesToCheck);
  