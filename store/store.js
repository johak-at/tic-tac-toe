import { defineStore } from "pinia";
import { ref } from "vue";
import { TicTacToe } from "@/game/tictactoe";

export const useStore = defineStore(
  "store",
  () => {
    const game = ref({});

    function createGame(player1, player2) {
      game.value = new TicTacToe(player1, player2);
    }

    const daisyTheme = ref("dark");
    return { game, createGame, daisyTheme };
  },
  {
    persist: true,
  }
);
