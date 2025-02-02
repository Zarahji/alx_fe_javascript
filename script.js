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
    const category = newQuoteCategory.value;
    if (text && category) {
        quotes.push({ text, category });
        newQuoteText.value = '';
        newQuoteCategory.value = '';
      }
    }
  
    newQuoteButton.addEventListener('click', showRandomQuote);
    window.addQuote = addQuote; // Make addQuote function available globally
  });
  