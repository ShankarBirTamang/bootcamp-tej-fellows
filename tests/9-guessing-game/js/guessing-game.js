/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

function generateWinningNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; //swap elements
  }
  return array;
}

class Game {
  constructor() {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
  }

  difference() {
    return Math.abs(this.playersGuess - this.winningNumber);
  }

  isLower() {
    return this.playersGuess < this.winningNumber;
  }

  playersGuessSubmission(guess) {
    if (typeof guess !== "number" || isNaN(guess) || guess < 1 || guess > 100) {
      throw "That is an invalid guess.";
    }
    this.playersGuess = guess;

    return this.checkGuess();
  }

  checkGuess() {
    const guess = this.playersGuess;
    const winningNum = this.winningNumber;
    const pastGuesses = this.pastGuesses;
    const difference = this.difference();

    //winning guess
    if (guess === winningNum) {
      return "You Win!";
    }
    //duplicate guess
    if (pastGuesses.includes(guess)) {
      return "You have already guessed that number.";
    } else {
      pastGuesses.push(guess); //add to past guess
    }

    //losing condition (5attempts)
    if (pastGuesses.length === 5) {
      return "You Lose.";
    }

    //temperature hints
    if (difference < 10) {
      return "You're burning up!";
    } else if (difference < 25) {
      return "You're lukewarm.";
    } else if (difference < 50) {
      return "You're a bit chilly.";
    } else if (difference < 100) {
      return "You're ice cold!";
    }
  }

  provideHint() {
    const hintArray = [
      this.winningNumber,
      generateWinningNumber(),
      generateWinningNumber(),
    ];

    return shuffle(hintArray);
  }

  //add prototype method to get the number of remaining guesses
  guessesRemaining() {
    return 5 - this.pastGuesses.length;
  }
}

newGame = () => new Game();

/****************************************************************************** */
// Event Listeners and Game setup
let game = new Game();

document.addEventListener("DOMContentLoaded", function () {
  const guessInput = document.getElementById("guess-input");
  const submitButton = document.getElementById("submit-guess");
  const newGameButton = document.getElementById("new-game-btn");
  const hintButton = document.getElementById("hint-btn");
  const remainingGuessesDisplay = document.getElementById("remaining-guesses");
  const messageBox = document.getElementById("message");
  const guessList = document.getElementById("guess-list");

  function updateGameDisplay() {
    //clear previous guesses
    const guessListItems = guessList.querySelectorAll(".guess-number");

    //Reset all spans to empty
    guessListItems.forEach((span) => {
      span.textContent = "";
    });

    //Add current guesses to the spans
    game.pastGuesses.forEach((guess, index) => {
      if (index < 5) {
        guessListItems[index].textContent = guess;
      }
    });

    //Update Remaining Guesses
    const remaining = game.guessesRemaining();
    remainingGuessesDisplay.textContent = `${remaining} ${
      remaining === 1 ? "guess" : "guesses"
    } remaining`;
  }

  function resetGame() {
    game = newGame();
    guessInput.value = "";
    messageBox.textContent = "Take a guess!";
    updateGameDisplay();
    submitButton.disabled = false;
  }

  submitButton.addEventListener("click", function () {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess)) {
      messageBox.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }

    try {
      let result = game.playersGuessSubmission(guess);
      messageBox.textContent = result;
      if (result === "You Win!" || result === "You Lose.") {
        submitButton.disabled = true; // disable submit button
        result = `${result} Winning Number: ${game.winningNumber}`;
        messageBox.textContent = result;
        updateGameDisplay();
      }
    } catch (error) {
      messageBox.textContent = error;
    }
    guessInput.value = "";
    guessInput.focus();
    updateGameDisplay();
  });

  newGameButton.addEventListener("click", resetGame);

  hintButton.addEventListener("click", function () {
    // Don't allow hints before first guess
    if (game.pastGuesses.length === 0) {
      messageBox.textContent =
        "Please make at least one guess before getting a hint";
      return;
    }

    // Don't allow hints after game is over
    if (
      game.pastGuesses.length >= 5 ||
      game.playersGuess === game.winningNumber
    ) {
      messageBox.textContent = "Game is already over! Start a new game.";
      return;
    }

    // Provide the hint
    const hints = game.provideHint();
    messageBox.textContent = `Possible numbers: ${hints.join(", ")}`;
    // Keep the focus on the input field
    guessInput.focus();
  });

  //Enter key press
  guessInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitButton.click();
    }
  });

  //Initialize Game Display
  updateGameDisplay();
});
