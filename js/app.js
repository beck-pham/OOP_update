/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * create a new instance of the `Game` class and 
 add event listeners for the start button and onscreen keyboard buttons.
  */

/**
const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);
*/

// const game = new Game();

// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

/**
 * TESTING CODE FOR getRandomPhrase() METHOD
 
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
*/

/**
 * TESTING CODE FOR DISPLAY PHRASE ON GAME BOARD
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
*/


/**
 * TESTING CODE FOR startGame() METHOD
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
*/



// //create event listener for startGame() method
// let game;
// const button = document.querySelector("#overlay #btn__reset");
// button.addEventListener('click', () => {
//     game = new Game();
//     game.startGame();
// });


let game
const button = document.querySelector("#overlay #btn__reset");
const onscreenButtons = document.querySelectorAll('.key');

button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

for (let i = 0; i < onscreenButtons.length; i++) {
    onscreenButtons[i].addEventListener('click', (event) => {
        game.handleInteraction(event.target);
    });
}

//add event listener for user to interact with pressing a physical key anywhere on the document
// document.addEventListener('keydown', (event) => {
//     game.handleInteraction(event);
// })

 
