

const projectName = "random quote machine"

const currentQuote = ""
const currentAuthor = ""
let quotesData; 

// for api call
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    const data = JSON.parse(response);
    console.log(data);
    quotesData = data;
  });

//for selecting random quote
function getRandomQuote() {
    return quotesData.quotes[
      Math.floor(Math.random() * quotesData.quotes.length)
    ];
  }
  
  function getQuote() {
    let randomQuote = getRandomQuote();
  
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
  }
  $('#text').text(currentQuote);
  document.getElementsByClassName("quote-text").innderhtml = currentQuote;
