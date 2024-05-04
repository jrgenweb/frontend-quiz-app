import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => {
    return {
      title: null,
      icon: null,
      score: null,
      maxScore: null
    }
  }
})
