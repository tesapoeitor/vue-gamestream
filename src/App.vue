<script setup>
import LayoutHero from './components/Layout/LayoutHero.vue';
import GameLayout from './components/Games/GameLayout.vue';
import GameModal from './components/Games/GameModal.vue';
import SharedLoader from './components/Shared/SharedLoader.vue';
import { useFetch } from './composables/useFetch';

const API_URL = "https://gamestreamapi.herokuapp.com/api/games"
const { state } = useFetch(API_URL)

</script>

<template>
  <LayoutHero />
  <main>
    <GameLayout :games="state.data">
      <template #title>
        <h2>Juegos Actualizados</h2>
      </template>
    </GameLayout>
    <SharedLoader v-if="state.isLoading" />
    <Teleport to="body">
      <GameModal />
    </Teleport>
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
