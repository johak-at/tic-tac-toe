<script setup>
import { Icon } from "@iconify/vue";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;

onMounted(() => {
  store.createGame();
});
</script>
<template>
  <v-container>
    <GameField></GameField>
  </v-container>
</template>
