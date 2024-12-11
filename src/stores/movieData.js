import { defineStore } from 'pinia';
import moviesApi from '../api/movies';

export const useMovieStore = defineStore('movies', {
    state: () => ({
        filmesPopulares: [],
        filmesMaisVistos: [],
        seriesPopulares: [],
        seriesMelhorAvalidas: [],
        filmesVariasPaginas: [],
        tituloAtual: null,
        lancamentoAtual: null,
        posterAtual: null,
        sinopseAtual: null,
    }),
    actions: {
        async buscarFilmes() {
            let response = await moviesApi.buscarFilmesPopulares(1);
            this.filmesPopulares = response.results;

            console.log(this.filmesPopulares)
            response =  await moviesApi.buscarFilmesMaisVistos();
            this.filmesMaisVistos = response.results;

            response = await moviesApi.buscarSeriesNoAr();
            this.seriesNoAr = response.results
            
            response = await moviesApi.buscarSeriesMelhoresAvaliadas();
            this.seriesMelhorAvalidas = response.results

            this.filmesVariasPaginas = this.filmesPopulares;
            response = await moviesApi.buscarFilmesPopulares(2);
            for (let filme of response.results) {
                this.filmesVariasPaginas.push(filme);
            }
        }
    },
});