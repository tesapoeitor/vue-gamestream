<script setup>
import { computed, ref, watch } from 'vue';
import IconSearch from '../Icons/IconSearch.vue'
import { useSearchQuery } from '../../composables/useSearchQuery';

const model = defineModel()
const isActive = ref(false)

const onFocus = () => { isActive.value = true }
const onBlur = () => { isActive.value = false }

const searchClasses = computed(() => ({'search--active': isActive.value}))

const { updateSearchQuery } = useSearchQuery();
const searchInput = ref('');

const handleSearch = () => {
  updateSearchQuery(searchInput.value);
};

watch(searchInput, (newValue) => {
  updateSearchQuery(newValue)
})
</script>

<template>
  <form @submit.prevent="handleSearch">
    <div class="search" :class="searchClasses">
      <input
        class="search__input"
        v-model="searchInput"
        @focus="onFocus"
        @blur="onBlur"
        type="text"
        placeholder="Buscar"
      />
      <button class="search__submit" type="submit">
        <IconSearch />
      </button>
    </div>
  </form>
</template>

<style scoped>
.search {
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 0.5rem;
}

.search--active {
  border-width: 1px;
  border-color: var(--color-background-primary);
}

.search__input {
  width: 100%;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
}

.search__input:focus {
  outline: none;
}

.search__submit {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.5rem;
  background-color: var(--color-background-primary);
  color: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
}

.search__submit > svg {
  width: 1.125rem;
  height: 1.125rem;
}
</style>
