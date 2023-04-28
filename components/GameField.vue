<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store/store";

const props = defineProps(["number"]);

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;

function makeMove() {
  //if game.players arrays are of equal length
  if (game.value.players[0].length === game.value.players[1].length) {
    //if game.players[0] does not include number
    if (!game.value.players[0].includes(props.number)) {
      //push number to game.players[0]
      game.value.players[0].push(props.number);
      if (game.value.winningPlayer(0)) game.value.winner = "Player 1";
    }
  } else {
    //if game.players[1] does not include number
    if (!game.value.players[1].includes(props.number)) {
      //push number to game.players[1]
      game.value.players[1].push(props.number);
      if (game.value.winningPlayer(1)) game.value.winner = "Player 2";
    }
  }
}
</script>

<template>
  <div class="field" v-if="game.players" @click="makeMove">
    <!-- <img src="icon-x.svg" width="100" height="120" v-if="game.players[0].includes(number)"/> -->
    <div v-if="game.players[0].includes(number)">
      <img src="/images/SVG/icon-x.svg" width="100" heigth="120" />
    </div>
    <div v-if="game.players[1].includes(number)">
      <img src="/images/SVG/icon-o.svg" width="100" heigth="120" />
    </div>
  </div>
</template>

<style scoped>
.field {
  aspect-ratio: 1;
  border: 1px solid red;
}
</style>
