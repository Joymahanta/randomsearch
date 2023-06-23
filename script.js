document.getElementById('searchButton').addEventListener('click', function () {
    for (let i = 0; i < 10; i++) {
        searchRandomWord();
    }
});

function searchRandomWord() {
    // List of random words
    const randomWords = ['apple', 'banana', 'cat', 'dog', 'elephant'];

    // Choose a random word from the list
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

    // Construct the search URL
    const searchUrl = `https://www.google.com/search?q=${randomWord}`;

    // Open the search URL in a new tab
    window.open(searchUrl);
}
