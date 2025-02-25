<script setup>
import { useSlots, ref } from 'vue';
import SharedSearch from '../Shared/SharedSearch.vue';

defineProps({
  games: Array,
})

const slots = useSlots()
const searchInput = ref('')

</script>

<template>
  <section>
    <slot name="title"></slot>
    <h2 v-if="!slots.title">Recent games</h2>
    <div class="game-layout">
      <SharedSearch v-model="searchInput"/>
      <slot></slot>
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
