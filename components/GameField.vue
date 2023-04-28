<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store/store";

const props = defineProps(["number"]);

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;
</script>

<template>
  <div class="field" v-if="game.players">
    <div v-if="game.players[0].includes(number)">X</div>
  </div>
</template>

<style scoped>
.field {
  aspect-ratio: 1;
  border: 1px solid red;
}
</style>
