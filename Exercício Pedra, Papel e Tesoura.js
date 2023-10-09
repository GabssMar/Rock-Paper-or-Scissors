const getUserChoice = (userImput) => {
    userImput = userImput.toLowerCase();
    if (userImput === 'rock' || userImput === 'paper' || userImput === 'scissors') {
      return userImput;
    } else {
      console.log('Error! Please, choose rock, paper or scissors')
    }
  };
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    }
  };
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie! There is no winners or losers!'
    } if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    } if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    } if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    }
  }
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw ' + userChoice);
    console.log('The Computer threw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  };
  playGame();