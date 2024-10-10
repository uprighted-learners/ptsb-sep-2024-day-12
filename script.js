// guess the number game
function guessTheNumber() {
    console.log("Guess the number between 1 and 100");
    let attempts = 0;
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;

    // do while game loop
    do {
        // get the user's guess
        guess = prompt("Enter your guess: ");

        // check if the input is a valid number
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            continue;
        }

        // incremenent and alert number of attempts
        attempts++;

        // check if the guess is correct and display if too high or too low
        if (guess < targetNumber) {
            alert("Too low! Please try again. Attempts: " + attempts);
        } else if (guess > targetNumber) {
            alert("Too high! Please try again. Attempts: " + attempts);
        } else {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
        }
    }
    while (guess !== targetNumber);
}

guessTheNumber();