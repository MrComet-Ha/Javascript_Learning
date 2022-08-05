const quotes = [
    {
        quote: "It's late to do something late, so start now.",
        author: "myongsu \"the great\" park"
    },
    {
        quote: "Dream on, dream until your dreams come true.",
        author: "Aerosmith, Dream on"
    },
    {
        quote: "Just do it, don't let your dreams be dreams yesterday.",
        author: "Shia Labeouf"
    },
    {
        quote: "1...2...5...3!",
        author: "Arthur, Monty Python and the Holy Grail"
    },
    {
        quote: "...And she's buying the stairway to heaven...",
        author: "Led Zeppelin, Stairway to heaven"
    },
    {
        quote: "I am the greatest. I said that even before I knew I was.",
        author: "Muhammad Ali"
    },
    {
        quote: "Tomorrow belongs to those who can hear it coming.",
        author: "David bowie"
    },
    {
        quote: "I faced it all, and I stood tall, and did it my way.",
        author: "Frank Sinatra, My way"
    },
    {
        quote: "The show must go on, inside my heart is breaking, my make-up may be flaking, but my smile, still, stays on.",
        author: "Freddy Mercury, The show must go on"
    },
    {
        quote: "Everybody has a plan until the get hit. Then, Like a rat, they stop in fear and freeze.",
        author: "Mike tyson"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randQuote.quote;
author.innerText = randQuote.author;