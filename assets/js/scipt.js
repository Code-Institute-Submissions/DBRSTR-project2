  
  let winner;
   let loser;
   
   //wait for DOM to load and then create diffculty selection within HTML
    document.addEventListener("DOMContentLoaded", function () {

        //store original html as variable, to revert changes after difficulty selection
        let revert = document.getElementById('game-wrapper').innerHTML;


        //create html difficulty selection
        let difficultyOption = document.getElementById('game-wrapper');
        difficultyOption.innerHTML = `
    <br>
    <br>
    <br>
    <h3>Please Select a Difficulty</h3>
    <button class="difficulty" id="easy">Easy</button>
    <button class="difficulty" id="medium">Medium</button>
    <button class="difficulty" id="hard">Hard</button>
    <br>
    <br>
    <button>
    <a style="text-decoration: none; color:#025669 font-weight:bold;" href="rules.html" target="_blank">Rules</a>
    </button>
    `;

        diffSetting = document.getElementsByClassName('difficulty');

        //select relevant difficulty setting and revert HTML to original structure
        for (let i = 0; i < diffSetting.length; i++) {
            diffSetting[i].addEventListener('click', function () {
                if (this.id === "easy") {
                    let gameMode = this.id;
                    difficultyOption.innerHTML = revert;
                    gameDifficulty(gameMode);
                } else if (this.id === "medium") {
                    let gameMode = this.id;
                    difficultyOption.innerHTML = revert;
                    gameDifficulty(gameMode);
                } else if (this.id === "hard") {
                    let gameMode = this.id;
                    difficultyOption.innerHTML = revert;
                    gameDifficulty(gameMode);

                }
            })

        }
    });


    /**
     * gameDifficulty() takes gameMode as a parameter and displays the relevant number of cards for that game.
     * then calls cardSelect() for user card selection.
     */
    function gameDifficulty(gameMode) {
        let getCards = document.getElementById('card-select');

        //html for lizard card
        let lizard = `<button data-type="lizard" class="card" id="4">
    <p>LIZARD</p>
    <i class="fa-regular fa-hand-lizard"></i>
    </button>`;

        /* html for spock card.
        NOTE: 5px <span> added for consistent styling, as all cards should be 5px apart from oneanother */
        let spock = `<span style="width: 5px"></span>
    <button data-type="spock" class="card" id="5">
    <p>SPOCK</p>
    <i class="fa-regular fa-hand-spock"></i>
    </button>`;

        //below updates the heading to show which gameMode has been selected. UPDATE: added ID to this paragraph, to identify game type for compCardSelect()
        let title = document.getElementById('title')
        let titleDiff = `
    <p style="text-transform: capitalize;" id="diff-selected">${gameMode} Game</p>
    `;

        if (gameMode === "easy") {
            title.innerHTML = titleDiff;
            cardSelect();
        } else if (gameMode === "medium") {
            title.innerHTML = titleDiff;
            getCards.innerHTML += lizard;
            cardSelect();
        } else if (gameMode === "hard") {
            title.innerHTML = titleDiff;
            getCards.innerHTML += lizard + spock;
            cardSelect();
        }
    }

    /** 
     * cardSelect() displays users chosen card within the user-choice div and passes chosenCard as a parameter to confirmCard().
     * displays an alert if opponents card is selected.
     */
    function cardSelect() {
        let buttons = document.getElementsByTagName('button');
        let userChoice = document.getElementById('user-choice');


        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                if (this.getAttribute('data-type') === "rock") {
                    let chosenCard = this.outerHTML;
                    userChoice.innerHTML = `
                    ${chosenCard}
                    `;
                    confirmCard()

                } else if (this.getAttribute('data-type') === "paper") {
                    let chosenCard = this.outerHTML;
                    userChoice.innerHTML = `
                    ${chosenCard}
                    `;
                    confirmCard()

                } else if (this.getAttribute('data-type') === "scissors") {
                    let chosenCard = this.outerHTML;
                    userChoice.innerHTML = `
                    ${chosenCard}
                    `;
                    confirmCard()

                } else if (this.getAttribute('data-type') === "lizard") {
                    let chosenCard = this.outerHTML;
                    userChoice.innerHTML = `
                    ${chosenCard}
                    `;
                    confirmCard()

                } else if (this.getAttribute('data-type') === "spock") {
                    let chosenCard = this.outerHTML;
                    userChoice.innerHTML = `
                    ${chosenCard}
                    `;
                    confirmCard()
                }
                //no real need to specify opponent button here, as only button left is the opponent button. Left 'else if' to future-proof
                else if (this.getAttribute('data-type') === "opponent") {
                    alert('Hey! No peaking!');
                }
            });
        };
    };
    /**
     * confirmCard() displays message in opponent-div and listens for click event, before calling compCardSelect
     */
    function confirmCard() {
        let revertNotice = document.getElementById('opponent-choice').innerHTML;

        let userChoice = document.getElementById('user-choice').children;

        //store chosen button as variable
        chosenCard = userChoice.item(0);
        //store name of chosen card, to use in HTML message below
        let chosenCardName = userChoice.item(0).innerText;

        let noticeArea = document.getElementById('opponent-choice');

        let confirmation = `
    <h3 style="text-transform: uppercase;">You've chosen: <br> ${chosenCardName}</h3>
    <p>Please click on the pop-up card below, to confirm your choice.</p>
    <p>Unsure? Feel free to choose another card <i class="fa-regular fa-face-smile-beam"></i></p>
    `;
        noticeArea.innerHTML = confirmation;

        chosenCard.addEventListener('click', function () {
            noticeArea.innerHTML = revertNotice;
            compCardSelect()
        })

    }

    /**
     * compCardSelect() confirms which game mode is selected (using the previously set title to confirm (Easy Game, Medium Game, Hard Game)),
     * then selects random number between 1-3, 1-4, 1-5 (depending on difficulty).
     * It then passes this number to convertToNumber
     */

    function compCardSelect() {
        let gameType = document.getElementById('diff-selected').innerText;

        let computerCardNum = Math.floor(Math.random() * 5) + 1;
        //randomly generate number - keeps the number from staying static, in case user choose another card
        computerCardNum;
        if (gameType === 'Easy Game') {
            while (3 < parseInt(computerCardNum)) {
                computerCardNum = Math.floor(Math.random() * 3) + 1;
            }
            if (computerCardNum === 1) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 2) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 3) {
                convertToNumber([computerCardNum, gameType])
            }
        } else if (gameType === 'Medium Game') {
            while (4 < parseInt(computerCardNum)) {
                computerCardNum = Math.floor(Math.random() * 4) + 1;
            }
            if (computerCardNum === 1) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 2) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 3) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 4) {
                convertToNumber([computerCardNum, gameType])
            }
        } else if (gameType === 'Hard Game') {
            computerCardNum
            if (computerCardNum === 1) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 2) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 3) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 4) {
                convertToNumber([computerCardNum, gameType])
            } else if (computerCardNum === 5) {
                convertToNumber([computerCardNum, gameType])
            };
        };

    }

    /**
     * 
     *  convertToNumber() takes the variable computerCardNum as a parameter. It converts the card in user-choice to a number,
     * then calls calculateRoundWinner() 
     */
    function convertToNumber([computerCardNum, gameType]) {

        let userChoice = document.getElementById('user-choice').children;

        //store <p> text as a variable
        let chosenCardName = userChoice.item(0).innerText;

        let convertCardToInt;

        if (chosenCardName === 'ROCK') {
            convertCardToInt = 1;

        } else if (chosenCardName === 'PAPER') {
            convertCardToInt = 2;

        } else if (chosenCardName === 'SCISSORS') {
            convertCardToInt = 3;

        } else if (chosenCardName === 'LIZARD') {
            convertCardToInt = 4;

        } else if (chosenCardName === 'SPOCK') {
            convertCardToInt = 5;

        } else {
            alert('Calculation error. Please restart the game')
        }



        /* 
        create notices object, to use in round winner calculations. I plan to split all notifications out into their own function eventually,
        though due to time constraints, I've decided to leave them here for now. Forgive the mess!
        */

        let notices = {

            winNotice: `
         <h3 style="text-transform: uppercase;">You Win!</h3>
         <p>Take that, evil robot overlords!</p>
         <p><i class="fa-regular fa-face-laugh-squint"></i></i></p>
        `,

            tieNotice: `
        <h3 style="text-transform: uppercase;">it's a tie!</h3>
        <p>No, not a Tie-Fighter... though it still beats a loss!</p>
        <p><i class="fa-regular fa-face-grin-beam-sweat"></i></p>
         `,

            loseNotice: `
        <h3 style="text-transform: uppercase;">you lose :(</h3>
        <p>Darn. This round goes to our robotic overlords at Skynet</p>
        <p><i class="fa-solid fa-robot"></i></p>
         `,
        };

        gameInformation = [chosenCardName, convertCardToInt, computerCardNum, gameType, notices]

        if (gameInformation[3] === 'Easy Game') {
            calculateEasyRoundWinner(gameInformation)
        } else if (gameInformation[3] === 'Medium Game') {
            calculateMediumRoundWinner(gameInformation)
        } else if (gameInformation[3] === 'Hard Game') {
            calculateHardRoundWinner(gameInformation)
        }


    };

    /**
     * calculateMediumRoundWinner() uses the array gameInformation[], to grab user choice, user choice converted to integer, computer integer, game difficulty and notices,
     * to compare and confirm the round outcome. Win or Lose then calls the function scoreTally, whilst a Tie calls cardSelect() to start over, without changing scores.
     */
    function calculateEasyRoundWinner(gameInformation) {

        //needed in tally
        let revertNotice = document.getElementById('opponent-choice').innerHTML;

        let noticeArea = document.getElementById('opponent-choice');

        //needed in tally/
        noticeArea.innerHTML = revertNotice;

        let userInt = gameInformation[1];
        let computerInt = gameInformation[2];
        gameType = gameInformation[3];

        if (gameType === 'Easy Game') {
            if (userInt === 1) {
                if (computerInt === 3) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally(winner)
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    scoreTally(loser)
                }
            } else if (userInt === 2) {
                if (computerInt === 1) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally(winner)
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    scoreTally(loser)
                }
            } else if (userInt === 3) {
                if (computerInt === 2) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally(winner)
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    scoreTally(loser)
                }
            }
        }
    }

    /**
     * calculateMediumRoundWinner() uses the array gameInformation[], to grab user choice, user choice converted to integer, computer integer, game difficulty and notices,
     * to compare and confirm the round outcome. Win or Lose then calls the function scoreTally, whilst a Tie calls cardSelect() to start over, without changing scores.
     */
    function calculateMediumRoundWinner(gameInformation) {

        //needed in tally
        let revertNotice = document.getElementById('opponent-choice').innerHTML;

        let noticeArea = document.getElementById('opponent-choice');

        //needed in tally/
        noticeArea.innerHTML = revertNotice;

        let userInt = gameInformation[1];
        let computerInt = gameInformation[2];
        gameType = gameInformation[3];

        if (gameType === 'Medium Game') {
            if (userInt === 1) {
                if (computerInt === 4) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }
            } else if (userInt === 2) {
                if (computerInt === 1) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }
            } else if (userInt === 3) {
                if (computerInt === 2) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }
            } else if (userInt === 4) {
                if (computerInt === 3) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally(winer)
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }
            }
        }

    };


    /**
     * calculateHardRoundWinner() uses the array gameInformation[], to grab user choice, user choice converted to integer, computer integer, game difficulty and notices.
     * As hard mode has multiple ways of winning/losing, it also uses an array of two win scenarios to compare and confirm the round outcome.
     * Win or Lose then calls the function scoreTally, whilst a Tie calls cardSelect() to start over, without changing scores.
     */
    function calculateHardRoundWinner(gameInformation) {
        //needed in tally
        let revertNotice = document.getElementById('opponent-choice').innerHTML;
        let noticeArea = document.getElementById('opponent-choice');

        //needed in tally/
        noticeArea.innerHTML = revertNotice;

        let userInt = gameInformation[1];
        let computerInt = gameInformation[2];
        gameType = gameInformation[3];

        rockArray = [3, 4];
        paperArray = [1, 5];
        scissorsArray = [2, 4];
        lizardArray = [5, 1];
        spockArray = [3, 1];

        if (gameType === 'Hard Game') {
            if (userInt === 1) {
                if (computerInt === rockArray[0]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === [1]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }

            } else if (userInt === 2) {
                if (computerInt === paperArray[0]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === paperArray[1]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }

            } else if (userInt === 3) {
                if (computerInt === scissorsArray[0]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt == scissorsArray[1]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }

            } else if (userInt === 4) {
                if (computerInt === lizardArray[0]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === lizardArray[1]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    loseLife()
                }

            } else if (userInt === 5) {
                if (computerInt === spockArray[0]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === spockArray[1]) {
                    noticeArea.innerHTML = gameInformation[4].winNotice;
                    scoreTally()
                } else if (computerInt === userInt) {
                    noticeArea.innerHTML = gameInformation[4].tieNotice;
                    cardSelect()
                } else {
                    noticeArea.innerHTML = gameInformation[4].loseNotice;
                    scoreTally()
                }

            }

        };
    };

    function scoreTally(winner, loser) {


        winner = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++winner;

        loser = parseInt(document.getElementById('lives').innerText);
        document.getElementById('lives').innerText = --loser;

        let scoreCheck = [winner, loser]

        if (parseInt(winner) === 10) {
            calculateGameWinner(scoreCheck)

        } else if (parseInt(loser) === 0) {
            calculateGameWinner(scoreCheck)
        };

    };

    function calculateGameWinner(scoreCheck) {
        console.log(scoreCheck);
    }

    //call below function to start roun again
    //cardSelect()
    //get remaining lives - check if it gets to zero - call calculateGameWinner()



    let revertNotice = document.getElementById('opponent-choice').innerHTML;

    let noticeArea = document.getElementById('opponent-choice');