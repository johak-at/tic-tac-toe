<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const game = storeToRefs(store).game;
</script>
<template>
  <v-container flex flex-col items-center gap-4 prose>
    <GameMenu v-if="!game.wins"></GameMenu>
    <GameBoard v-else></GameBoard>
  </v-container>
</template>

<style>
/* * {
  border: 1px solid red;
} */
</style>
