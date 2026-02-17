import { words } from './words.js';

let selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
let displayedWord = "_".repeat(selectedWord.length).split("");
let lives = 10;
let guessedLetters = [];

const wordDisplay = document.getElementById("word-display");
const livesElement = document.getElementById("lives");
const guessedLettersElement = document.getElementById("guessed-letters");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-btn");
const resetButton = document.getElementById("reset-btn");
const hangmanImage = document.getElementById("hangman-img");
const messageContainer = document.getElementById("message-container");

// Helped by ChatGPT (lines 17-23)
guessInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitButton.click();
    }
});


function updateDisplay() {
    wordDisplay.textContent = displayedWord.join(" ");
    updateLivesDisplay();
    updateGuessedLetters();

    guessInput.focus();
}

function updateLivesDisplay() {
    livesElement.innerHTML = "❤️".repeat(lives);
}

function updateGuessedLetters() {
    guessedLettersElement.textContent = guessedLetters.join(", ");
}

function updateHangmanImage() {
    const stage = 10 - lives;
    hangmanImage.src = `static/images/hangman_step_${stage}.jpeg`;
}

function showMessage(message, type = "normal") {
    messageContainer.textContent = message;

    messageContainer.style.color = "";
    messageContainer.style.fontWeight = "normal";

    if (type === "win") {
        messageContainer.style.color = "green";
        messageContainer.style.fontWeight = "bold";
    } else if (type === "lose") {
        messageContainer.style.color = "red";
        messageContainer.style.fontWeight = "bold";
    } else if (type === "normal") {
        messageContainer.style.color = "red";
        messageContainer.style.fontWeight = "normal";

        // Helped by ChatGPT (lines 55-79)
        setTimeout(() => {
            clearMessage();
        }, 3000);
    }
}

function clearMessage() {
    messageContainer.textContent = "";
}

function handleGuess() {
    const guess = guessInput.value.toUpperCase();
    guessInput.value = "";

    if (!/^[A-Z]$/.test(guess)) {
        showMessage("Please enter a valid English letter (A-Z).", "normal");
        guessInput.focus();
        return;
    }

    if (!guess || guess.length !== 1) {
        showMessage("Please enter a single letter.", "normal");
        guessInput.focus();
        return;
    }

    if (guessedLetters.includes(guess) || displayedWord.includes(guess)) {
        showMessage(`You already guessed the letter "${guess}". Try a different one.`, "normal");
        guessInput.focus();
        return;
    }

    clearMessage();

    if (selectedWord.includes(guess)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guess) {
                displayedWord[i] = guess;
            }
        }
    } else {
        guessedLetters.push(guess);
        lives--;
        updateHangmanImage();
    }

    if (displayedWord.join("") === selectedWord) {
        showMessage("You win!", "win");
        endGame();
    } else if (lives === 0) {
        showMessage(`Game Over! The word was: ${selectedWord}`, "lose");
        endGame();
    }

    updateDisplay();
}

function endGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Select a new random word
    displayedWord = "_".repeat(selectedWord.length).split("");
    lives = 10;
    guessedLetters = [];
    hangmanImage.src = "static/images/hangman_step_0.jpeg";
    guessInput.disabled = false;
    submitButton.disabled = false;
    clearMessage();
    updateDisplay();
}

submitButton.addEventListener("click", handleGuess);
resetButton.addEventListener("click", resetGame);

updateDisplay();
