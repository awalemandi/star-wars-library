import { useEffect, useState } from 'react';
import { useFavorite, useMovie } from '../context/MovieContext';
import { useSearch } from '../context/SearchContext';
import styles from '../styles/Home.module.scss';
import MovieCard from './MovieCard';
import axios from 'axios';

function MovieResults({ }) {
    const [searchField] = useSearch();
    const [movies, setMovies] = useMovie();
    const [favorites, setFavorites] = useFavorite();
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('https://swapi.dev/api/films/');
            const data = await res.data;
            console.log(data);
            const movieList = data.results;
            setMovies(movieList);
        };
        fetchMovies();
    }, []);


    useEffect(() => {
        if (movies) {
            setFilteredMovies(
                movies.filter(movie => movie.title.toLowerCase().includes(searchField.toLowerCase()))
            );
        }
    }, [searchField]);

    return (
        <div className={styles.resultsContainer}>
            {filteredMovies.length == 0 ?
                <h2>Could not find any movies :/</h2> :
            (filteredMovies.map(movie => <MovieCard
                key={movie.episode_id}
                eps={movie.episode_id}
                title={movie.title}
                release={movie.release_date}
            />))}
        </div>
    );
}

export default MovieResults;
