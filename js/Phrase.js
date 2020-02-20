/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard.
 */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.querySelector("#phrase ul"); 
        const letter = this.phrase;
        const letterArray = [...letter]; //create array from the phrase to single letters

        //for each letter in array create li and add the class names to letters
        letterArray.forEach(letter => {
            const li = document.createElement("li");
            ul.appendChild(li);
            if (letter == " ") {
                li.className = "space";
                li.textContent = " ";
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }
        });
    }


    
    /**
    * check if letter is included in the selected phrases
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        /**  Method shows matched letter to display
         iterates over all letters, if innerHTML matchs letter passed to method
         show class added to lettr. letterMAtch returned */
         let matchedLetters = document.querySelectorAll('.letter');
         matchedLetters.forEach(matchLetter => {
             if(matchLetter.innerHTML === letter) {
                 matchLetter.classList.remove('hide', 'letter', '`${matchLetter}`');
                 matchLetter.classList.add('show', 'letter', '`${matchLetter}');
             }
         })
         return matchedLetters;
    };
 }

 


