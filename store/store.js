import { defineStore } from 'pinia'
import { ref } from 'vue'
import { TicTacToe } from '../game/tictactoe'

export const useStore = defineStore(
    'store',
    () => {
        const game = ref({})

        function createGame() {
            game.value = new TicTacToe()
        }

        const daisyTheme = ref('dark')
        return { game, createGame, daisyTheme }
    },
    {
        persist: true
    }
)
