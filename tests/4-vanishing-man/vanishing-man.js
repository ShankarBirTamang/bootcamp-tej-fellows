/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];
class VanishingMan {
  constructor(secretWord) {
    this.secretWord = secretWord.toLowerCase().split("");
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = "playing";
  }

  submitGuess(char) {
    if (this.gameState !== "playing") return;
    const lowerChar = char.toLowerCase();
    if (!this.lettersGuessed.includes(lowerChar)) {
      this.lettersGuessed.push(lowerChar);
      if (!this.secretWord.includes(lowerChar)) {
        this.remainingGuesses--;
      }
    }
    this.computeGameState();
  }

  computeGameState() {
    if (this.remainingGuesses <= 0) {
      this.gameState = "lost";
    } else if (
      this.secretWord.every(
        (letter) => this.lettersGuessed.includes(letter) || letter === ""
      )
    ) {
      this.gameState = "won";
    }
  }

  // getSecretWordPuzzle() {
  //   return this.secretWord
  //     .map((letter) => {
  //       if (this.lettersGuessed.includes(letter) || letter === " ") {
  //         return letter;
  //       }
  //       return "#";
  //     })
  //     .join("");
  // }

  getSecretWordPuzzle() {
  let puzzle = "";

  for (let i = 0; i < this.secretWord.length; i++) {
    const letter = this.secretWord[i];

    if (this.lettersGuessed.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "#";
    }
  }

  return puzzle;
}


  getGameStateMessage() {
    if (this.gameState === "playing") {
      return `There is a total of ${
        this.remainingGuesses
      } guesses remaining:\n${
        this.remainingGuesses === 6
          ? ASCIIART[ASCIIART.length - 1]
          : ASCIIART[this.remainingGuesses]
      }`;
    } else if (this.gameState === "lost") {
      return `Game Over, the word was "${this.secretWord.join("")}":\n${
        ASCIIART[0]
      }`;
    } else {
      return "Winner Winner Chicken Dinner, you won!";
    }
  }
}

let game = new VanishingMan("widdershins");
console.log(game.secretWord);

game = new VanishingMan("xertz");
game.submitGuess("a");
game.submitGuess("a");
game.submitGuess("z");
game.submitGuess("e");
game.submitGuess("a");
game.submitGuess("z");
console.log(game.lettersGuessed);
console.log(game.remainingGuesses);

game = new VanishingMan("fidgety");
game.submitGuess("f"); // correct guesses do not decrease the amount of guesses remaining
game.submitGuess("Z");
game.gameState = "lost"; // manually setting the gameState to "lost" to test the "lost" state
game.submitGuess("g");
game.submitGuess("F");
game.submitGuess("a");
game.submitGuess("T");
game.submitGuess("B");
console.log(game.lettersGuessed);
console.log(game.remainingGuesses);

game = new VanishingMan("typewriter");

game.submitGuess("w");
game.submitGuess("T");
const twoCorrectGuesses = game.getSecretWordPuzzle();
console.log(twoCorrectGuesses);
console.log(game.remainingGuesses);

console.log(game.getGameStateMessage());

game.submitGuess("y");
game.submitGuess("p");
game.submitGuess("e");

const fiveCorrectGuesses = game.getSecretWordPuzzle();
console.log(fiveCorrectGuesses);
game.submitGuess("a");
console.log(game.remainingGuesses);
console.log(game.getGameStateMessage());
game.submitGuess("b");
console.log(game.remainingGuesses);
console.log(game.getGameStateMessage());
game.submitGuess("c");
console.log(game.remainingGuesses);
console.log(game.getGameStateMessage());
game.submitGuess("c");
console.log(game.remainingGuesses);
console.log(game.getGameStateMessage());
game.submitGuess("d");
console.log(game.remainingGuesses);
console.log(game.getGameStateMessage());
game.submitGuess("f");
console.log(game.remainingGuesses);
console.log(game.getGameStateMessage());
game.submitGuess("g");
console.log(game.remainingGuesses);
console.log(game.getGameStateMessage());

game = new VanishingMan("nacho fries");

console.log(game.getSecretWordPuzzle());
game = new VanishingMan("take me out to the ball game");
console.log(game.getSecretWordPuzzle());

function simulateVanishingMan(secretWord) {
  const game = new VanishingMan(secretWord);
  const char = "abcdefghijklmnopqrstuvwxyz".split("");
  function playVanishingMan() {
    if (game.gameState !== "playing") {
      return game.getGameStateMessage();
    } else {
      const randomIndex = Math.floor(Math.random() * 26);
      const guess = char[randomIndex];
      game.submitGuess(guess);
      console.log(game.lettersGuessed);
      console.log("Remaining Guess : " + game.remainingGuesses);
      console.log(game.getSecretWordPuzzle());

      return playVanishingMan();
    }
  }
  return playVanishingMan();
}

console.log(simulateVanishingMan("H"));
