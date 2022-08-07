//wait for DOM to load and then create diffculty selection:
document.addEventListener("DOMContentLoaded", function () {
    let revert = document.getElementById('game-area').innerHTML;
    let difficultyOption = document.getElementById('game-area');
    difficultyOption.innerHTML = `
    <br>
    <br>
    <h3>Please Select a Difficulty</h3>
    <button class="difficulty" id="easy">Easy</button>
    <button class="difficulty" id="medium">Medium</button>
    <button class="difficulty" id="hard">Hard</button>
    `;

    diffSetting = document.getElementsByClassName('difficulty');

    console.log(diffSetting)

    for (let i=0; i<diffSetting.length; i++) {
        console.log(diffSetting[i]);
        diffSetting[i].addEventListener('click', function () {
            if (this.id === "easy") {
                difficultyOption.innerHTML = revert;
                easyGame()                
            } else if (this.id === "medium") {
                difficultyOption.innerHTML = revert;
                mediumGame()
            } else if (this.id === "hard") {
                difficultyOption.innerHTML = revert;
                hardGame()
            } 
        }) 

    }
});

function gameDifficulty() {

}

function cardSelect() {

}

function compCardSelect() {

}

function calculateRoundWinner() {

}

function calculateGameWinner() {

}