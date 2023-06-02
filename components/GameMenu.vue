<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;
const player1 = ref("Player 1");
const player2 = ref("Player 2");
</script>
<template>
  <h1>TICTACTOE</h1>
  <h2>Menu</h2>
  <button @click="store.createGame(player1, player2)">Start Game!</button>
  <div>
    <p>Player 1 is:</p>
    <input v-model="player1" />
  </div>
  <div>
    <p>Player 2 is:</p>
    <input v-model="player2" />
  </div>
</template>
<style scoped>
h1 {
  font-size: 3rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  /* color: rgba(28, 123, 164, 155); */
  color: rgb(32, 135, 179);
}
h2 {
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: rgb(32, 135, 179);
}
button {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: black;
  background-color: rgba(28, 123, 164, 155);
  border-radius: 10px;
  padding: 10px;
}
input {
  font-size: 1rem;
  font-style: italic;
  text-align: left;
  color: white;
  border-radius: 10px;
  padding: 10px;
}
p {
  font-size: 1.2rem;
  font-style: italic;
  text-align: left;
  color: rgb(32, 135, 179);
}
</style>
