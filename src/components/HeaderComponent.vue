<script setup>

</script>

<template>
    <header>
        <router-link to="/" class="title">
            <h1>Iporac Filmes</h1>
        </router-link>
        <div class="links">
            <router-link to="/filmes">Filmes</router-link>
            <router-link to="/series">Séries</router-link>
        </div>
    </header>
</template>

<style scoped>

header {
    margin-top: -10px;
    margin-left: -10px;
    height: 50px;
    width: 100%;
    color: #fff;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: rgb(0, 0, 0);
    z-index: 3;
}

.title {
    position: absolute;
}

.links {
    display: flex;
    gap: 15%;
    text-align: center;
    justify-content: center;
    width: 100%;
}

a {
    color: white;
    text-decoration: none;
}

</style>