/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * create a Phrase class to handle the creation of phrases.
 * */


//Global variables
const hideDiv = document.getElementById('overlay');

class Game {
    //Game class constructor method doesn’t receive any parameters
    //missed: property initial value = 0 since no guesses have been made at start
    //phrases: property is an array of Phrase objects for the game. Value = empty array to start
    //activePhrase property is phrase object that's currently in play.
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrase() {
        //create an array of phrase
        const phrase = [
            new Phrase('Trust the process'),
            new Phrase('Make it happen'),
            new Phrase('Think of grow rich'),
            new Phrase('Be positive'),
            new Phrase('Grow small everyday than standing still')
        ];
        return phrase;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
        
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        //hides the start screen overlay
        hideDiv.style.display = 'none';
        //calling getRandomPhrase() method on the active phrase
        this.activePhrase = this.getRandomPhrase();
        //calling addPhraseToDisplay() method to display the active phrase
        this.activePhrase.addPhraseToDisplay();
    };


    /* handles game interactions, if the text content of the targeted letter returns true when 
         checked against the letters in the activePhrase the chosen letter is disabled on the keyboard 
         and the '.chosen' class is added to the targeted letter key. The 'keyChosen' is passed through 
         the showMatchedLetter method of the active phrase. The checkForWin method is called. If checkForWin === true call
         gameOver(true)  else '.wrong' class added to keyChosen, call removeLife()*/

    handleInteraction(button) {
        console.log(button);
        button.disable = true;
        
        if(this.activePhrase.checkLetter(button.textContent)) {
            button.className = "chosen";
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.className = "wrong";
            this.removeLife();
        }
    }
    /**
      * This method checks to see if the player has revealed all of the letters
      * Method checks number of letters equal to number of shown letters,
      * if numbers are equal returns true, else return false
      */
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        const playerLetter = document.querySelectorAll('.show');
        if (letters.length === playerLetter.length) {
            return true;
        } else {
            return false;
        }
    };

    /**
    When called iterates over heart image and replaces with lostHeart image, 
    increments missed counter by 1.
    WHen counter equals 5 gameOver method is called with false parameter 
    */
   removeLife() {
    const gameLife = document.querySelectorAll('li img');
    this.missed += 1;
    for(let i = 0; i < this.missed; i++) {
        gameLife[i].src ="images/lostHeart.png";
        console.log(this.missed);
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
  }
    /**
     *  gameOver()`: This method displays the original start screen overlay, and
        depending on the outcome of the game, updates the overlay `h1` element with a
        friendly win or loss message, and replaces the overlay’s `start` CSS class with
        either the `win` or `lose` CSS class.
     */

    /**
     * Update your app to reset the gameboard between games. After a game is completed, the
       gameboard needs to be reset so that clicking the "Start Game" button will successfully load a
       new game.
     */
    
    gameOver(gameWon){
        const overlay = document.getElementById('overlay');
        const title = document.getElementById("game-over-message");
        overlay.style.display = 'flex';
        if (gameWon === true) {
            overlay.className = 'win';
            title.textContent = "You won! Congratulation!!!";
        } else if (gameWon === false) {
            overlay.className = 'lose';
            title.textContent = "Sorry. Better luck next time!!!";
        }
        this.reset();
    }

    reset() {
        //remove all 'li' child element
        const ul = document.querySelector('ul');
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        //reset onscreen keyboard buttons
        const key = document.getElementById("qwerty");
        const keyButtons = key.querySelectorAll("button");
        keyButtons.forEach(button => {
            button.className = "key";
        });
        //replace lostHeart image with liveHeart image
        const newGameLife = document.querySelectorAll('li img');
        for (let j = 0; j < newGameLife.length; j++) {

            newGameLife[j].src = 'images/liveHeart.png';
        }
    }
}












