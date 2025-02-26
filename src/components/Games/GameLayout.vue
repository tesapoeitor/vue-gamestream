<script setup>
import { useSlots, ref, computed } from 'vue';
import SharedSearch from '../Shared/SharedSearch.vue';

const { games } = defineProps({
  games: {
    type: Array,
    required: true
  }
})

const slots = useSlots()
const searchInput = ref('')

const gamesViews = computed(() => {
  return games.filter(game =>
    game.title.toLowerCase().includes(searchInput.value.toLowerCase())
  )
})

const onSearch = (searchTerm) => {
  searchInput.value = searchTerm
}
</script>

<template>
  <section>
    <slot name="title"></slot>
    <h2 v-if="!slots.title">Recent games</h2>
    <div class="game-layout">
      <SharedSearch v-model="searchInput" @search="onSearch"/>
      <slot :games="gamesViews"></slot>
    </div>
  </section>
</template>

<style scoped>
.game-layout {
  display: grid;
  gap: 2rem;
  margin: 1rem auto;
  max-width: 90%;
}
</style>
