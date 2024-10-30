const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author") ;
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById( "new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

function showLoadingSpinner (){
  // Show loading spinner 
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner (){
  // hide loading spinner 
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function newQuote(){
  showLoadingSpinner();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  //check if the quote is undefined 
  if(!quote.author){
    author.innerText="Unkown";
  }else {
    authorText.innerText = quote.author;
  }
  //Check the quote length to determine styling, dynamically reduce font size
  if(quote.text.length>50){
    quoteText.classList.add('long-text')
  }
  else{  quoteText.classList.remove("long-quote");
}
quoteText.innerText = quote.text;
removeLoadingSpinner();
}

//get quotes from Api 
async function getQuote() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log("whoops, no quote", error);
    //run getQuote again (recursive)
    getQuote();
  }
}

//tweet quote 
function tweetQuote(){
  const twitterUrl =  `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");

}

//add event listner 

newQuoteBtn.addEventListener("click",newQuote);
twitterBtn.addEventListener("click",tweetQuote);

getQuote()