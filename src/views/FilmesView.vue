<script setup>
import { ref, onMounted } from 'vue'
import Loading from 'vue-loading-overlay'
import moviesApi from '../api/movies'
import useGenreStore from '../stores/genre.js';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movieData';
import { useRouter } from 'vue-router';

const genreStore = useGenreStore();
const movieStore = useMovieStore();
const isLoading = ref(false);
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

const movies = ref([]);
const router = useRouter()

const listMovies = async (genreId) => {
    genreStore.setCurrentGenreId(genreId);
    isLoading.value = true;
    const response = await moviesApi.buscarFilmes(genreId, 'movie')
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
    listMovies(28 );
    await genreStore.getAllGenres('movie');
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
        <div v-for="movie in movies" :key="movie.id" class="movie-card" @click="enviarInfo(movie.title, movie.overview, movie.release_date, movie.poster_path)">

            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
            <div class="movie-details">
                <p class="movie-title">{{ movie.title }}</p>
                <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
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

<style>
.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    margin-bottom: 2rem;
}


.genre-item {
    background-color: rgb(201, 42, 42);
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    color: #ffffff;
}

.genre-item:hover {
    cursor: pointer;
    background-color: #000000;
    box-shadow: 0 0 0.9rem #ffffff;
}


.movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    color: rgb(255, 255, 255);
    width: 100%;
    justify-content: center;
}

.movie-card {
    width: 15rem;
    height: 32rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.9rem rgb(238, 238, 238);
    cursor: pointer;
}

.movie-card img {
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.9rem #ffffff;
}

.movie-details {
    padding: 0 0.5rem;
}

.movie-title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.3rem;
    height: 3.2rem;
}

.movie-genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
}

.movie-genres span {
    background-color: #e21111;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: bold;
}

.movie-genres span:hover {
    cursor: pointer;
    background-color: #000000;
    box-shadow: 0 0 0.9rem #ffffff;
}

.active {
  background-color: #3f3434;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #3b3232;
  font-weight: bolder;
}


</style>
