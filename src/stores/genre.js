import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import moviesApi from '../api/movies'

export const useGenreStore = defineStore('genre', () => {
  const state = reactive({
    genres: [],
    currentGenreId: null
  })

  const currentGenreId = computed(() => state.currentGenreId)
  const genres = computed(() => state.genres)
  const getGenreName = (id) => state.genres.find((genre) => genre.id === id).name

  const getAllGenres = async (type) => {
    const response = await moviesApi.getGenres(type)
    state.genres = response.genres
  }

  const setCurrentGenreId = (genreId) => {
    state.currentGenreId = genreId;
  };  

  return {
    genres,
    getAllGenres,
    getGenreName,
    currentGenreId,
    setCurrentGenreId,
  };
  
})

export default useGenreStore