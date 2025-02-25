<script setup>
import { onMounted, reactive } from 'vue'
import LayoutHero from './components/Layout/LayoutHero.vue';
import GameCard from './components/Games/GameCard.vue';
import GameLayout from './components/Games/GameLayout.vue';

const API_URL = "https://gamestreamapi.herokuapp.com/api/games"

const state = reactive({
  error: null,
  isLoading: false,
  data: []
})

const fetchGames = async () => {
  try {
    state.isLoading = true
    const responde = await fetch(API_URL)
    const data = await responde.json()
    state.data = data
  } catch (error) {
    console.error(error)
    state.error = error
  } finally {
    state.isLoading = false
  }
}

onMounted(()=> {
  fetchGames()
})

</script>

<template>
  <LayoutHero />
  <GameLayout>
    <template #title>
      <h2>Juegos Actualizados</h2>
    </template>
    <GameCard v-for="game in state.data" :game="game" :key="game.title" />
  </GameLayout>
  <main></main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
