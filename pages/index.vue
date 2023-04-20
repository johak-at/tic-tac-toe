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
  <v-container flex flex-col items-center gap-4 prose>
    <div>{{ game }}</div>
  </v-container>
</template>

<style>
/* * {
  border: 1px solid red;
} */
</style>
