const btnSearch = document.querySelector('.btnSearch');
let word = document.querySelector('.word');
let nameWord = document.querySelector('.nameWord');
let aboutWord = document.querySelector('.aboutWord');
let definitionWord = document.querySelector('.definitionWord');
let exampleWord = document.querySelector('.exampleWord');

let searchWord = () => {
    word = document.querySelector('.word').value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(url)
    .then(data => data.json())
    .then(item => {
        console.log(item);
        word.innerHTML = '';
        nameWord.textContent = `${item[0].word}`;
        aboutWord.textContent = `${item[0].meanings[0].partOfSpeech} ${item[0].phonetic}`;
        definitionWord.textContent = `${item[0].meanings[0].definitions[0].definition}`;
        exampleWord.textContent = `${item[0].meanings[0].definitions[0].example || ''} `;
    });
}


btnSearch.addEventListener('click', () => {
    searchWord();
});
