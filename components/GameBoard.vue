<script setup>
import { Icon } from "@iconify/vue";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

onMounted(() => {
  store.createGame();
});
</script>
<template>
  <v-container>
    <GameField
      v-for="number in numbers"
      :key="number"
      :number="number"
    ></GameField>
  </v-container>
</template>
