var quotes = ['Live as if you were to die tomorrow. Learn as if you were to live forever – Mahatma Gandhi', 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind. – Bernard M. Baruch', 'We must not allow other people’s limited perceptions to define us.– Virginia Satir']

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}