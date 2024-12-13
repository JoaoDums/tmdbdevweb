<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movieData';

const movieStore = useMovieStore()
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const titulo = movieStore.tituloAtual
const poster = movieStore.posterAtual
const sinopse = movieStore.sinopseAtual
const lancamento = movieStore.lancamentoAtual

</script>

<template>
    <header-component />
    <main>
        <h1>{{ titulo }} - ({{ formatDate(lancamento) }})</h1>
        <div class="poster">
            <img :src="`https://image.tmdb.org/t/p/original/${poster}`" alt="">
            <p>{{ sinopse }}</p>
        </div>
    </main>
</template>

<style scoped>

main {
    color: rgb(0, 0, 0);
}

h1 {
    text-align: center;
}

.poster {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2%;
}

p {
    width: 30%;
}

img {
    width: 25.5vw;
}

</style>