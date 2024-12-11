<script setup>
import { ref } from 'vue';
import { useMovieStore } from '../stores/movieData';
import { useRouter } from 'vue-router';
const router = useRouter()

const movieStore = new useMovieStore;

const filmesPopulares = ref(movieStore.filmesPopulares);
const filmesMaisVistos = ref(movieStore.filmesMaisVistos);
const seriesMelhorAvalidas = ref(movieStore.seriesMelhorAvalidas);
const seriesNoAr = ref(movieStore.seriesNoAr);

function enviarInfo(titulo, sinopse, lancamento, poster) {
    movieStore.tituloAtual = titulo;
    movieStore.sinopseAtual = sinopse;
    movieStore.lancamentoAtual = lancamento;
    movieStore.posterAtual = poster;
    router.push('/filme')
}

console.log(filmesPopulares.value)

</script>

<template>
    <div class="rows">
        <div class="rowContainer">
            <h2>Filmes - Populares</h2>
            <div class="row">
                <div class="movie" v-for="filme, index of filmesPopulares" :key="index" @click="enviarInfo(filme.title, filme.overview, filme.release_date, filme.poster_path)">
                    <img :src="`https://image.tmdb.org/t/p/original/${filme.poster_path}`" alt="">
                </div>
            </div>
        </div>
        <div class="rowContainer">
            <h2>Filmes - Melhor Avaliados</h2>
            <div class="row">
                <div class="movie" v-for="filme, index of filmesMaisVistos" :key="index" @click="enviarInfo(filme.title, filme.overview, filme.release_date, filme.poster_path)">
                    <img :src="`https://image.tmdb.org/t/p/original/${filme.poster_path}`" alt="">
                </div>
            </div>
        </div>
        <div class="rowContainer">
            <h2>Séries - No Ar</h2>
            <div class="row">
                <div class="movie" v-for="serie, index of seriesNoAr" :key="index" @click="enviarInfo(serie.name, serie.overview, serie.first_air_date, serie.poster_path)">
                    <img :src="`https://image.tmdb.org/t/p/original/${serie.poster_path}`" alt="">
                </div>
            </div>
        </div>
        <div class="rowContainer">
            <h2>Séries - Melhor Avaliadas</h2>
            <div class="row">
                <div class="movie" v-for="serie, index of seriesMelhorAvalidas" :key="index" @click="enviarInfo(serie.name, serie.overview, serie.first_air_date, serie.poster_path)">
                    <img :src="`https://image.tmdb.org/t/p/original/${serie.poster_path}`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.rows {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
    margin-top: 5%;
    width: 100%;
    align-items: center;
    color: white;
}

.row {
    display: flex;
    width: 99%;
    gap: 1%;
}

.rowContainer {
    overflow-x: scroll;
    width: 100%;
}

img {
    width: 250px;
    height: 380px;
}

.movie {
    cursor: pointer;
}
</style>