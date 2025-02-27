<script setup>
import { onMounted, reactive } from 'vue'
import LayoutHero from './components/Layout/LayoutHero.vue';
import GameCard from './components/Games/GameCard.vue';
import GameLayout from './components/Games/GameLayout.vue';
import GameModal from './components/Games/GameModal.vue';

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
  <main>
    <GameLayout :games="state.data">
      <template #title>
        <h2>Juegos Actualizados</h2>
      </template>
      <template #default="{ games }">
        <GameCard v-for="game in games" :game="game" :key="game.title" />
      </template>
    </GameLayout>
    <GameModal />
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
