//Erstelle eine Klasse die das Spiel TicTacToe repräsentiert
export class TicTacToe {
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
