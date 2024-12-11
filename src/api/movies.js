import axios from 'axios';

const config = {headers: {accept: 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmUxZjE0YzYyZTQzOWIwMjM4MDJkNTE0ZWZjMjdjNSIsInN1YiI6IjY1MDg5YTU1NDJkOGE1MDEzODliNGM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NUIY0vNhpSOb1uS96BLUFvsxx4l6wSNfRO_sClDFpj4`,}}

class moviesApi {
    async buscarFilmesPopulares() {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', config)
        return data
    }
    async buscarFilmesMaisVistos() {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', config)
        return data
    }
    async buscarSeriesMelhoresAvaliadas() {
        const { data } = await axios.get('https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1', config)
        return data
    }
    async buscarSeriesNoAr() {
        const { data } = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?language=pt-BR&page=1', config)
        return data
    }
    async buscarVideoFilme(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`, config)
        return data
    }
    async buscarVideoSerie(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?language=pt-BR`, config)
        return data
    }
    async buscarFilmes(genreId, type) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/${type}?language=pt-BR&with_genres=${genreId}`, config)
        return data
    }
    async getGenres(type) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?language=pt-BR`, config)
        return data
    }
}
export default new moviesApi