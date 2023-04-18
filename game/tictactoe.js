//Erstelle eine Klasse die das Spiel TicTacToe repräsentiert
class TicTacToe {
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
  current = 0;
  checkForWin(player) {
    //some testet eines der Elemente es zu trifft dass er den Text besteht und gibt true zurück
    return wins.some((win) => {
      return win.every((field) => {
        return player.includes(field);
      });
    });
  }
}
