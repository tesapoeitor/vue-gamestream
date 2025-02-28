import { ref } from 'vue';

const searchInput = ref('');

export function useSearchQuery() {
  const updateSearchQuery = (searchTerm) => {
    searchInput.value = searchTerm;
  };

  return {
    searchInput,
    updateSearchQuery
  };
}
