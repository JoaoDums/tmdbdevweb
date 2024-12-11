<script setup>

import HeaderComponent from '../components/HeaderComponent.vue';
import SliderComponent from '../components/SliderComponent.vue';
import FileiraComponent from '../components/FileiraComponent.vue';
import { useMovieStore } from '../stores/movieData';
import { onMounted, ref } from 'vue';
import Loading from 'vue-loading-overlay'

const movieStore = new useMovieStore;
const isLoading = ref(false)

onMounted(async () => {
   isLoading.value = true
   await movieStore.buscarFilmes();
   isLoading.value = false
})

</script>

<template>
        <header-component />
        <slider-component v-if="!isLoading"/>
        <fileira-component v-if="!isLoading" />
        <loading v-model:active="isLoading"/>
</template>

<style scoped>
h1 {
        color: rgb(209, 45, 45);
        text-align: center;
}
</style>