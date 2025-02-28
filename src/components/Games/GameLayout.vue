<script setup>
import { useSlots, computed } from 'vue';
import SharedSearch from '../Shared/SharedSearch.vue';
import GameCard from './GameCard.vue';
import { useSearchQuery } from '../../composables/useSearchQuery';

const { games } = defineProps({
  games: {
    type: Array,
    required: true
  }
});

const slots = useSlots();
const { searchInput } = useSearchQuery();

const gamesViews = computed(() => {
  return games.filter(game =>
    game.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
});
</script>

<template>
  <section>
    <slot name="title"></slot>
    <h2 v-if="!slots.title">Recent games</h2>
    <div class="game-layout">
      <SharedSearch />
      <div>
        <GameCard v-for="game in gamesViews" :game="game" :key="game.title" />
      </div>
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
