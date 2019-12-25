let invitation = confirm('Do you want to play a game?');
let prizeAmount = 0;
let askGame_1, askGame__1, askGame___1, askGame____1, askGame_2, askGame__2, askGame___2, askGame____2, askGame_3, 
askGame__3, askGame___3, askGame____3, askGameDefault, askGameDefault_1;   
const MAGIC_9 = 9;
const MAGIC_13 = 13;
const HIGH = 100;
const MEDIUM = 50;
const LOW = 25;
const HIGHx2 = 200;
const MEDIUMx2 = 100;
const LOWx2 = 50;

while (invitation === true) {
    let randomNumber = Math.floor(Math.random() * MAGIC_9);
    console.log(randomNumber);
    let userAttempt_1 = parseInt(prompt('Choose a roulette from 0 to 8\nAttempts left: 3\nTotal prize: ' 
    + prizeAmount + '$\nPossible prize on the current attempt: 100$'));
    let userAttempt_2 = parseInt(prompt('Choose a roulette from 0 to 8\nAttempts left: 2\nTotal prize: ' 
    + prizeAmount + '$\nPossible prize on the current attempt: 50$'));
    let userAttempt_3 = parseInt(prompt('Choose a roulette from 0 to 8\nAttempts left: 1\nTotal prize: ' 
    + prizeAmount + '$\nPossible prize on the current attempt: 25$'));

    switch (randomNumber) {
        case userAttempt_1:
            prizeAmount += HIGH;
                askGame_1 = confirm('Congratulation, you won! Your prize is: ' 
            + prizeAmount + ' $. Do you want to continue?');
            if (askGame_1 === false) {
                alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                    askGame__1 = confirm('Do you want to play again?');
                if (askGame__1 === true) {
                    prizeAmount = 0;
                    break;
                } else {
                    invitation = false;
                    break;
                }
            } else {
                randomNumber = Math.floor(Math.random() * MAGIC_13);
                console.log(randomNumber);
                let userAttempt_4 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 3\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 200$'));
                let userAttempt_5 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 2\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 100$'));
                let userAttempt_6 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 1\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 50$'));

                switch (randomNumber) {
                    case userAttempt_4:
                        prizeAmount += HIGHx2;
                            askGame___1 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___1 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____1 = confirm('Do you want to play again?');
                            if (askGame____1 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    case userAttempt_5:
                        prizeAmount += MEDIUMx2;
                            askGame___2 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___2 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____2 = confirm('Do you want to play again?');
                            if (askGame____2 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    case userAttempt_6:
                        prizeAmount += LOWx2;
                            askGame___3 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___3 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____3 = confirm('Do you want to play again?');
                            if (askGame____3 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    default:
                        alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                            askGameDefault_1 = confirm('Do you want to play again?');
                        if (askGameDefault_1 === true) {
                            prizeAmount = 0;
                            break;
                        } else {
                            invitation = false;
                            break;
                        }
                }
                break;
            }
        case userAttempt_2:
            prizeAmount += MEDIUM;
                askGame_2 = confirm('Congratulation, you won! Your prize is: ' 
            + prizeAmount + ' $. Do you want to continue?');
            if (askGame_2 === false) {
                alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                askGame__2 = confirm('Do you want to play again?');
                if (askGame__2 === true) {
                    prizeAmount = 0;
                    break;
                } else {
                    invitation = false;
                    break;
                }
            } else {
                randomNumber = Math.floor(Math.random() * MAGIC_13);
                let userAttempt_4 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 3\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 200$'));
                let userAttempt_5 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 2\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 100$'));
                let userAttempt_6 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 1\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 50$'));

                switch (randomNumber) {
                    case userAttempt_4:
                        prizeAmount += HIGHx2;
                            askGame___1 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___1 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____1 = confirm('Do you want to play again?');
                            if (askGame____1 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    case userAttempt_5:
                        prizeAmount += MEDIUMx2;
                            askGame___2 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___2 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____2 = confirm('Do you want to play again?');
                            if (askGame____2 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    case userAttempt_6:
                        prizeAmount += LOWx2;
                            askGame___3 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___3 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____3 = confirm('Do you want to play again?');
                            if (askGame____3 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    default:
                        alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                            askGameDefault_1 = confirm('Do you want to play again?');
                        if (askGameDefault_1 === true) {
                            prizeAmount = 0;
                            break;
                        } else {
                            invitation = false;
                            break;
                        }
                }
                break;
            }
        case userAttempt_3:
            prizeAmount += LOW;
                askGame_3 = confirm('Congratulation, you won! Your prize is: ' 
            + prizeAmount + ' $. Do you want to continue?');
            if (askGame_3 === false) {
                alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                    askGame__3 = confirm('Do you want to play again?');
                if (askGame__3 === true) {
                    prizeAmount = 0;
                    break;
                } else {
                    invitation = false;
                    break;
                }
            } else {
                randomNumber = Math.floor(Math.random() * MAGIC_13);
                let userAttempt_4 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 3\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 200$'));
                let userAttempt_5 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 2\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 100$'));
                let userAttempt_6 = parseInt(prompt('Choose a roulette from 0 to 12\nAttempts left: 1\nTotal prize: ' 
                + prizeAmount + '$\nPossible prize on the current attempt: 50$'));

                switch (randomNumber) {
                    case userAttempt_4:
                        prizeAmount += HIGHx2;
                            askGame___1 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___1 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____1 = confirm('Do you want to play again?');
                            if (askGame____1 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    case userAttempt_5:
                        prizeAmount += MEDIUMx2;
                            askGame___2 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___2 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____2 = confirm('Do you want to play again?');
                            if (askGame____2 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    case userAttempt_6:
                        prizeAmount += LOWx2;
                            askGame___3 = confirm('Congratulation, you won! Your prize is: ' 
                        + prizeAmount + ' $. Do you want to continue?');
                        if (askGame___3 === false) {
                            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                                askGame____3 = confirm('Do you want to play again?');
                            if (askGame____3 === true) {
                                prizeAmount = 0;
                                break;
                            } else {
                                invitation = false;
                                break;
                            }
                        } else {
                            break;
                        }
                    default:
                        alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                            askGameDefault_1 = confirm('Do you want to play again?');
                        if (askGameDefault_1 === true) {
                            prizeAmount = 0;
                            break;
                        } else {
                            invitation = false;
                            break;
                        }
                }
                break;
            }
        default:
            alert('Thank you for your participation. Your prize is: ' + prizeAmount + ' $');
                askGameDefault = confirm('Do you want to play again?');
            if (askGameDefault === true) {
                prizeAmount = 0;
                break;
            } else {
                invitation = false;
                break;
            }
    }
}
if (invitation === false) {
    alert('You did not become a billionaire, but can.');
}