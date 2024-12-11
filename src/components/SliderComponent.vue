<script setup>

import { ref } from 'vue';
import { useMovieStore } from '@/stores/movieData';
import { useRouter } from 'vue-router';
const router = useRouter()

const movieStore = new useMovieStore()
const filmes = movieStore.filmesPopulares;
const slider = ref();
const filmeAtual = ref(0)

function changeSlide(index) {

    if (filmeAtual.value == 0 && index == -1 || filmeAtual.value == filmes.length - 1) {
        filmeAtual.value = 0
    } else {
        filmeAtual.value += index
    }
    slider.value[filmeAtual.value].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
};


function enviarInfo(titulo, sinopse, lancamento, poster) {
    movieStore.tituloAtual = titulo;
    movieStore.sinopseAtual = sinopse;
    movieStore.lancamentoAtual = lancamento;
    movieStore.posterAtual = poster;
    router.push('/filme')
}

</script>

<template>
    <div class="container">
        <div class="left navigation" @click="changeSlide(-1)">...</div>
        <div class="slideContainer">
            <div class="slider" v-for="filme, index of filmes" :key="index" ref="slider" @click="enviarInfo(filme.title, filme.overview, filme.release_date, filme.poster_path)">
                <img :src="`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`" alt="">
            </div>
        </div>
        <div class="right navigation" @click="changeSlide(1)">...</div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;
    color: white;
    margin-top: -10px;
}

.slider {
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.slideContainer {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    margin: auto;
    height: 700px;
    color: white;
    scrollbar-width: none;
    padding: 2%;
}

.navigation {
    position: relative;
    cursor: pointer;
    padding: 20px;
    border: 1px solid;
    z-index: 2;
    height: 10px;
    margin-top: 20%;
}

img {
    border: 3px solid rgba(255, 255, 255, 0.856);
    border-radius: 5px;
    box-shadow: 10px 10px 5px black;
}
</style>