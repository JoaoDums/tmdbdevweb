<script setup>
import { ref, onMounted } from 'vue'
import Loading from 'vue-loading-overlay'
import moviesApi from '../api/movies'
import useGenreStore from '../stores/genre.js';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movieData';
import { useRouter } from 'vue-router';

const router = useRouter()
const genreStore = useGenreStore();
const isLoading = ref(false);
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const movieStore = useMovieStore()

const movies = ref([]);

const listMovies = async (genreId) => {
    genreStore.setCurrentGenreId(genreId);
    isLoading.value = true;
    console.log(genreId)
    const response = await moviesApi.buscarFilmes(genreId, 'tv')
    movies.value = response.results;
    isLoading.value = false;
};

function enviarInfo(titulo, sinopse, lancamento, poster) {
    movieStore.tituloAtual = titulo;
    movieStore.sinopseAtual = sinopse;
    movieStore.lancamentoAtual = lancamento;
    movieStore.posterAtual = poster;
    router.push('/filme')
}

onMounted(async () => {
    isLoading.value = true;
    listMovies(10759);
    await genreStore.getAllGenres('tv');
    isLoading.value = false;
});

</script>
<template>
    <header-component />
    <ul class="genre-list">
        <li v-for="genre in genreStore.genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item"
            :class="{ active: genre.id === genreStore.currentGenreId }">

            {{ genre.name }}

        </li>


    </ul>
    <loading v-model:active="isLoading" is-full-page />
    <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id" class="movie-card" @click="enviarInfo(movie.name, movie.overview, movie.first_air_date, movie.poster_path)">

            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
            <div class="movie-details">
                <p class="movie-title">{{ movie.name }}</p>
                <p class="movie-release-date">{{ formatDate(movie.first_air_date) }}</p>
                <p class="movie-genres">
                    <span v-for="genre_id in movie.genre_ids" :key="genre_id" @click="listMovies(genre_id)"
                        :class="{ active: genre_id === genreStore.currentGenreId }">
                        {{ genreStore.getGenreName(genre_id) }}
                    </span>

                </p>

            </div>

        </div>
    </div>
</template>