//TODO
//THE RECIVED JSON HAS NOT TITLE, MAKE IT RETRIVE ONE JSON QUOTE AT A TIME

const projectName = "random quote machine"

var currentQuote = ''
var currentAuthor = ''
let quotesData;  

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
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });
  $('#new-quote').on('click', getQuote);
});