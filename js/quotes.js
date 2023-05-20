const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "- Oscar Wilde -",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "- Bernard M. Baruch -",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "- Mae West -",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "- Thomas A. Edison -",
    },
    {
        quotes: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
        author: "- Eleanor Roosevelt -",
    },
    {
        quotes: "It is never too late to be what you might have been.",
        author: "- George Eliot -",
    },
    {
        quote: "For every minute you are angry you lose sixty seconds of happiness.",
        author: "- Ralph Waldo Emerson -",
    },
    {
        quote: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "- Albert Einstein -",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "- Pablo Picasso -",
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "- George Bernard Shaw -",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // random number between 0 to 10 which is arrays quantities.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;