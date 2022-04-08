[

 Two Player Game  (Player1,Player2)

* Player1  starts the game
* And prompted with a move
* When Player1 selects a move
* Then it will place Player1 marker (X) on the board

*  
* When the second player is prompted for a move
* Then Player2 will select a move
* And Player2 marker (O) will be placed on the board

* Given a player makes a move
* And the move results in three consecutive spaces
* Then the game is over

* Given a player makes a move
* And the move is the last empty spot on the board
 Then the game is over
 When playing game, Player must be notified of win or tie
 Once a game is over, user must be able to play again