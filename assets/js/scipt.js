    // define game maths
    //let easyNum = Math.floor(Math.random() * 3) + 1;
    //let medNum = Math.floor(Math.random() * 4) + 1;
    let cardNum = Math.floor(Math.random() * 5) + 1;
    let rockNum = 1;
    let paperNum = 2;
    let scissorsNum = 3;
    let lizardNum = 4;
    let spockNum = 5;

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
        let lizard = `<button data-type="lizard" class="card">
    <p>LIZARD</p>
    <i class="fa-regular fa-hand-lizard"></i>
    </button>`;

        /* html for spock card.
        NOTE: 5px <span> added for consistent styling, as all cards should be 5px apart from oneanother */
        let spock = `<span style="width: 5px"></span>
    <button data-type="spock" class="card">
    <p>SPOCK</p>
    <i class="fa-regular fa-hand-spock"></i>
    </button>`;

        //below updates the heading to show which gameMode has been selected
        let title = document.getElementById('title')
        let titleDiff = `
    <p style="text-transform: capitalize;">${gameMode} Game</p>
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
     * confirmCard() uses
     */
    function confirmCard() {
        let cardChoice = document.getElementById('card-select');
        let revert = document.getElementById('opponent-choice').innerHTML;
        let noticeArea = document.getElementById('opponent-choice');
        let confirmation = `
    <h3 style="text-transform: capitalize;">is this the card you want to play?</h3>
    <p>Hit 'Enter' key, to confirm.</p>
    <p>Unsure? Feel free to choose another card <i class="fa-regular fa-face-smile-beam"></i></p>
    `;
        noticeArea.innerHTML = confirmation;

        cardChoice.addEventListener('keydown', function (event) {
            if (event.key === "Enter") {
                noticeArea.innerHTML = revert;
                compCardSelect();
            }
        })


    }


    function compCardSelect() {
        let playArea = document.getElementById('card-select').children;
        let gameType = playArea.length
        console.log(gameType);

        if (gameType === 3) {
            gameType = 'easy';
            console.log(gameType);
        } else if (gameType === 4) {
            gameType = 'medium';
            console.log(gameType)
        }
        // span included in card-select to style cards. array length for hard is 6.
        else if (gameType === 6) {
            gameType = 'hard';
            console.log(gameType)
        };

        if (gameType === 'easy') {
            cardNum
            while (+cardNum > +3) {
                console.log(cardNum)
                cardNum++;
            }
            if (cardNum === 1) {
                return +1;
            } else if (cardNum === 2) {
                return +2;
            } else if (cardNum === 3) {
                return +3;
            }
        } else if (gameType === 'medium') {
            cardNum
            while (+cardNum > +4) {
                console.log(cardNum);
                cardNum++
            }
            if (cardNum === 1) {
                return +1;
            } else if (cardNum === 2) {
                return +2;
            } else if (cardNum === 3) {
                return +3;
            } else if (cardNum === 4) {
                return +4;
            }
        } else if (gameType === 'hard') {
            cardNum
            if (cardNum === 1) {
                return +1;
            } else if (cardNum === 2) {
                return +2;
            } else if (cardNum === 3) {
                return +3;
            } else if (cardNum === 4) {
                return +4;
            } else if (cardNum === 5) {
                return +5;
            };
        };
    }

        function calculateRoundWinner() {
            let lives = document.getElementById('lives');
            moves++;
            lives.innerText = `${5-moves}`;
        }

        function calculateGameWinner() {

        }