import { onMounted, reactive } from "vue"

export function useFetch(apiUrl = '', onSuccess = () => {}) {
  const state = reactive({
    error: null,
    isLoading: false,
    data: []
  })

  const fetchGames = async () => {
    try {
      state.isLoading = true
      const responde = await fetch(apiUrl)
      const data = await responde.json()
      state.data = data
      onSuccess(data)
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

  return {
    state
  }
}
