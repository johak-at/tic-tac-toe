<script setup>
import { Icon } from "@iconify/vue";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>
<template>
  <v-container>
    <div v-if="!game.winner" class="board" grid grid-cols-3>
      <GameField
        v-for="number in numbers"
        :key="number"
        :number="number"
      ></GameField>
    </div>
    <div v-else>Game over! {{ game.winner }} wins!</div>
    <!-- //if there is no winner and all the fields contain a number -->
    <!-- <div
      v-if="
        !game.winner && game.players[0].length + game.players[1].length === 9
      "
    >
      Game over! Nobody wins!
    </div> -->
    <v-button @click="game = {}">Back to Menu!</v-button>
  </v-container>
</template>
<style scoped>
.board {
  width: 600px;
}
v-button {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: black;
  background-color: rgba(28, 123, 164, 155);
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
</style>
