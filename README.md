# Rock, Paper, Scissors, Lizard, Spock

<br>
A game of chance, with a minor twist - this game uses cards to denote which hand you have chosen, then pits it against a computer opponent.
<br>
Visitors to the page can find a difficulty selection area and below that, some rules on what hand beats what.
<br>
The game ends when either you core 5 points, or you lose 5 lives to the computer opponent.
<br>
<br>
<hr>
<br>
<br>

## Features & Function
<br>

All game text is in Azure, against a white background. The card selection area, is silver, and the cards are the default colours for buttons - a lighter grey then the silver card selection area.

<br>

It clearly states the name of the game at the top of the screen and when a game mode is selected, the title updates to the game difficulty.

<br>

There are 3 games modes, of increasing diffculty:
<br>
<ul>
<li>Easy</li>
<li>Medium</li>
<li>Hard</li>
</ul>

<br>

Easy mode is the classic, Rock, Paper, Scissors game and gives the user the choice of 3 cards to play.

<br>

Medium mode is Rock, Paper, Scissors, Lizard and it gives the user a choice of 4 cards to play - the additional choice decreases the chance of a tie.

<br>

Hard mode is Rock, Paper, Scissors, Lizard, Spock and, you guessed it, gives the user 5 cards to choose from. This game mode has added complexity, as all cards can beat and lose to, 2 other cards.

<br>

<hr>

<br>

## Disclaimer

<br>

This project needs further developing!

<br>

The HTML and CSS had to be put together in half a day and the JavaScript was intensively coded in under 2 days, so it's a little rough around the edges to say the least!
<br>
I'd like to have had the time to split out some of the functions further and look at some of the game logic - the calculate round winner function (split into easy, medium and hard), look a little clunky and I believe with some more time, could be refined and made more concise.
<br>
Due to the rushed nature, the comments from git commit are also woefully vague!
<br>
<br>
There were some bugs with refreshing the game/page using JavaScript, which I've worked around for now, by just using an <a> element to provide the play again/restart game button.
<br>
<hr>
<br>
<br>

## Credits

<br>
<a href="https://fontawesome.com/v6/icons/" target="_blank">Font Awesome</a>
<br>
I used Font Awesome for the icons used throughout the project.
<br>
<br>
<a href="https://www.freeconvert.com/svg-to-ico" tagret="_blank">Free Convert</a>
<br>
Free convert was used to convert the SVG of the Vulcan handsind (from Font Awesome), to .ico format.