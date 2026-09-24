import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    leaderboard: [
      { name: 'Aditama', score: 980 },
      { name: 'Rizky', score: 920 },
      { name: 'Fajar', score: 850 },
      { name: 'Dimas', score: 790 },
      { name: 'Naufal', score: 720 }
    ]
  }),

  getters: {
    topPlayers: (state) => state.leaderboard
  }
})