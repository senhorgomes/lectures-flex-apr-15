export const announceResult = (playerSelection, compSelection) => {
    const lookup = {
      'Scissors': 'Paper',
      'Paper': 'Rock',
      'Rock': 'Scissors'
    };
    if (!(playerSelection && compSelection)) {
      return 'Waiting';
    }
    // Tree === Tree
    if (lookup[playerSelection] === compSelection) {
      return 'Won';
    }
    if (lookup[compSelection] === playerSelection) {
      return 'Lost';
    }
    return 'Tied';
  };
  
// Function works, but the test fails

// Check the tests, are the test correct, are we testing the correct/expected behaviour
// Then you look at the code

// Companies won't invest in testing
// Weaker tests
// Don't cover all edge cases
// Test will pass
// Function breaks the app

  export const genFeedbackMessage = (status) => {
    const lookup = {
      Waiting: 'Waiting for your choice!',
      Won: 'You win!!',
      Lost: 'Too bad! Better luck next time.',
      Tied: 'Tie game'
    };
    return lookup[status];
  };

  export const aiSelection = (cheatingMode, playerSelection) => {
    // Paper loses to Scissors
    // Scissors loses to Rock
    // Rock loses to Paper

    const playerLookup = {
      "Rock": "Paper",
      "Scissors": "Rock",
      "Paper": "Scissors"
    }
    // If cheating is on
    if(cheatingMode){
      // Then beat the player, we need to know what the player selected
      // if(playerSelection === "Rock"){
      //   return "Scissors"
      // }
      return playerLookup[playerSelection];
    }

    const arrayOfChoices = ["Rock", "Paper", "Scissors"];
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * arrayOfChoices.length);
    // Using that index, we can use square bracket notation, to return a random element
    return arrayOfChoices[randomIndex];
  }