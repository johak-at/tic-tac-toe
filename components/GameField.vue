<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store/store";

const props = defineProps(["number"]);

// useStore() and name handling:
const store = useStore();
const game = storeToRefs(store).game;

function makeMove() {
  //if the two player arrays don't contain the number
  if (
    !game.value.players[0].includes(props.number) &&
    !game.value.players[1].includes(props.number)
  ) {
    //if game.players arrays are of equal length
    if (game.value.players[0].length === game.value.players[1].length) {
      //if game.players[0] does not include number
      if (!game.value.players[0].includes(props.number)) {
        //push number to game.players[0]
        game.value.players[0].push(props.number);
        if (game.value.winningPlayer(0))
          game.value.winner = game.value.playerNames[0];
      }
    } else {
      //if game.players[1] does not include number
      if (!game.value.players[1].includes(props.number)) {
        //push number to game.players[1]
        game.value.players[1].push(props.number);
        if (game.value.winningPlayer(1))
          game.value.winner = game.value.playerNames[1];
      }
    }
    // if the joint player arrays have a length of 9 set winner to "Nobody"
    // if (game.value.players[0].length + game.value.players[1].length === 9) {
    // game.value.winner = "Nobody";
    //if the joint player arrays have a length of 9 and none of the wins are true set winner to "Nobody"
    if (
      game.value.players[0].length + game.value.players[1].length === 9 &&
      !game.value.winningPlayer(0) &&
      !game.value.winningPlayer(1)
    ) {
      game.value.winner = "Nobody";
    }
  }
}
</script>

<template>
  <div class="field" v-if="game.players" @click="makeMove">
    <!-- <img
      src="/images/SVG/icon-x.svg"
      width="100"
      height="120"
      
      v-if="game.players[0].includes(number)"
    />
    <img
      src="/images/SVG/icon-o.svg"
      width="100"
      height="120"
      v-if="game.players[1].includes(number)"
    /> -->
    <div v-if="game.players[0].includes(number)">
      <img src="/images/SVG/icon-x.svg" width="145" heigth="145" />
    </div>
    <div v-if="game.players[1].includes(number)">
      <img src="/images/SVG/icon-o.svg" width="145" heigth="145" />
    </div>
  </div>
</template>

<style scoped>
.field {
  aspect-ratio: 1;
  border: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
