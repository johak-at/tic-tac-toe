//Erstelle eine Klasse die das Spiel TicTacToe repräsentiert
export class TicTacToe {
  constructor(player1, player2) {
    this.playerNames[0] = player1;
    this.playerNames[1] = player2;
  }

  wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  players = [[], []];
  playerNames = ["Player 1", "Player 2"];
  winner = "";

  winningPlayer(player) {
    //some testet für jede Sieg-Kombination an Feldern, ob sie in den Feldern des aktuellen Players enthalten ist und gibt true zurück, wenn dies für eine Sieg-Kombination zutrifft
    return this.wins.some((win) => {
      return win.every((field) => {
        return this.players[player].includes(field);
      });
    });
  }
}
