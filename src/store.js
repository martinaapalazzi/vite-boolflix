import { reactive } from 'vue';

export const store = reactive ({
    APIKey: 'aa25afce3fd537f80254f1744a5a5ff9',
    APIMovies: 'https://api.themoviedb.org/3/search/movie',
    APISeries: 'https://api.themoviedb.org/3/search/tv',
    search: "",
    movies: [],
    series: [],
});