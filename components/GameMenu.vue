<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;
</script>
<template>
  <h1>Menu</h1>
  <button @click="store.createGame()">Start Game!</button>
  //erstelle ein Eingabefeld für einen Namen und einen Button, der den Namen an
  die Funktion store.createGame() übergibt
</template>
