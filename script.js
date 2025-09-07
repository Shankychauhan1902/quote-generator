const quotes=[
  {
    text: "The secret of getting ahead is getting started",
    aurthor: "Mark Twain"
  },
  {
    text: "It's hard to beat a person who never gives up.",
    aurthor: "Babe Ruth"
  },
  {
    text: "Believe you can and you're halfway there.",
    aurthor: "Theodore Roosevelt"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    aurthor: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    aurthor: "Winston Churchill"
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    aurthor: "Zig Ziglar"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    aurthor: "C.S. Lewis"
  }
];

const quoteTextElement= document.getElementById('quote-text');
const quoteAurthorElement= document.getElementById('quote-aurthor');
const newQuoteBtn= document.getElementById('new-quote-btn');

newQuoteBtn.addEventListener('click', generateNewQuote);
function generateNewQuote(){
  const randomNumber= Math.floor(Math.random()* quotes.length);
  const randomQuote = quotes[randomNumber];
  quoteTextElement.textContent=`"${randomQuote.text}"`;
  quoteAurthorElement.textContent=`-"${randomQuote.aurthor}"`;
}
newQuoteBtn.addEventListener('mouseover',function(){
  newQuoteBtn.textContent='Press me👆👆!';
});
newQuoteBtn.addEventListener('mouseleave',function(){
  newQuoteBtn.textContent='New Quote';
});