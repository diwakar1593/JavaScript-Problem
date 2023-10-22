const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playRound(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return "It's a tie!";
  }

  if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    return "Player 1 wins!";
  } else {
    return "Player 2 wins!";
  }
}

function playGame(rounds) {
  let player1Score = 0;
  let player2Score = 0;

  let round = 1;

  const playRoundRecursive = () => {
    if (round <= rounds) {
      rl.question(
        `Round ${round}: Player 1, enter your choice (rock, paper, scissors): `,
        (player1Choice) => {
          rl.question(
            `Round ${round}: Player 2, enter your choice (rock, paper, scissors): `,
            (player2Choice) => {
              const result = playRound(
                player1Choice.toLowerCase(),
                player2Choice.toLowerCase()
              );
              console.log(
                `Round ${round}: Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result}`
              );

              if (result.includes("Player 1 wins")) {
                player1Score++;
              } else if (result.includes("Player 2 wins")) {
                player2Score++;
              }

              round++;
              playRoundRecursive();
            }
          );
        }
      );
    } else {
      console.log(
        `Game over! Player 1 score: ${player1Score}, Player 2 score: ${player2Score}`
      );
      rl.close();
    }
  };

  playRoundRecursive();
}

rl.question("Enter the number of rounds to play: ", (totalRounds) => {
  playGame(parseInt(totalRounds));
});
