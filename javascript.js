//TODO
//THE RECIVED JSON HAS NOT TITLE, MAKE IT RETRIVE ONE JSON QUOTE AT A TIME

const projectName = "random-quote-machine"

var currentQuote = ''
var currentAuthor = ''
let quotesData;  


var colorsCombination = {
  "1": {
    "first":"#1ECBE1",
    "second": "#1E6AE1",
    "third": "#1EE196"
  },
  "2": {
    "first":"#16E92D",
    "second": "#16E997",
    "third": "#68E916"
  },
  "3": {
    "first":"#49ED12",
    "second": "#12ED49",
    "third": "#12ED49"
  },
  "4": {
    "first":"#B3F10E",
    "second": "#42F10E",
    "third": "#F1BD0E"
  },
  "5": {
    "first":"#E87017",
    "second": "#E8D817",
    "third": "#E81727"
  }
}
var combo = colorsCombination[1]
console.log(combo.first)

// for api call
function getQuotes(){
// const settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://type.fit/api/quotes",
//   "method": "GET"
// }

// $.ajax(settings).done(function (response) {
//   const data = JSON.parse(response);
//   quotesData = JSON.parse(response)
//   console.log("Data:")
//   console.log(quotesData);

  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://type.fit/api/quotes',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    } 
});
}
 
function getRandomQuote() {
  // for (var number in quotesData){
  //   if (number ==Math.floor(Math.random() * 100)){
  //     console.log(number)
  //     console.log(quotesData[number])
  //     return quotesData[number]
  //   }
  //   }
  return quotesData[
    Math.floor(Math.random() * 1643)
  ];
}
function getQuote() {
  let randomQuote = getRandomQuote();
  currentQuote = randomQuote.text;
  if (randomQuote.author != null){
    currentAuthor = randomQuote.author;
  }
  else{
    currentAuthor = "unknown"
  }
  console.log(currentQuote)
  console.log(currentAuthor)
  $('.quote-text').text(currentQuote);
  $('#author').text(currentAuthor);

  //for color and animations
  var color = colorsCombination[Math.floor(Math.random() * 5)];
  console.log(color)
  console.log(color.first)
  //TODO 
  //everything working(height, width...) for animate except color
  $('body').animate(
    {
      backgroundColor: "#333"
    }
  );
  $('.button').animate(
    {
      backgroundColor: color.first
    },
    1000
  );
  $('#quote-box').animate(
    {
      backgroundColor: "#73A857"
    },
    1000
  );
  $('#new-quote').animate(
    {
      color: "#333"
    },
    1000
  );
  $('#tweet-quote').animate(
    {
      color: color.third
    },
    1000
  );
  $('#tumblr-quote').animate(
    {
      color: color.third
    },
    1000
  );
}


$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });
  $('#new-quote').on('click', getQuote);
});