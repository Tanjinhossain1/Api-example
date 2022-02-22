const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => uiInterPhase(data))
}
const uiInterPhase = quote =>{
    const quotes = document.getElementById('quote');
    quotes.innerText = quote.quote;
}