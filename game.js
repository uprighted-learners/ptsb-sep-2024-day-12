// import the readline module to handle terminal inputs
const readline = require('readline');

// create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to ask a question and return an answer
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve)
    });
}

// function to start the game
async function startAdventure() {
    console.log("Welcome to your adventure!")
    let isPlaying = true;

    while (isPlaying) {
        let choice1 = await askQuestion("You staring into a dark room. Do you want to go ENTER or LEAVE? ");

        if (choice1.toLowerCase() === 'enter') {
            console.log("You entered the room.")
        }

        else if (choice1.toLowerCase() === 'leave') {
            console.log("You run away crying.")
            isPlaying = false;
        }
    }

    rl.close();
};


startAdventure();