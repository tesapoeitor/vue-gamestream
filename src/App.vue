<script setup>
import LayoutHero from './components/Layout/LayoutHero.vue';
import { onMounted, reactive } from 'vue'

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
  <main></main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
