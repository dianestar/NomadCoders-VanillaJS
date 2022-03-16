const quote = document.querySelector("#quote p");

const randomQuote = fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {
    quote.innerText = `"${data.slip.advice}"`;
});