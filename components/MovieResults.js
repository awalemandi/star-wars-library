import { useEffect, useState } from 'react';
import { useFavorite, useMovie } from '../context/MovieContext';
import { useSearch } from '../context/SearchContext';
import styles from '../styles/Home.module.scss';
import MovieCard from './MovieCard';
import axios from 'axios';

function MovieResults({ }) {
    const [searchField] = useSearch();
    const [movies, loading] = useMovie();
    const [favorites, setFavorites] = useFavorite();
    const [filteredMovies, setFilteredMovies] = useState([]);

    const filterMovies = () => {

    };

    useEffect(() => {
        if (!loading) {
            console.log(movies);
            setFilteredMovies(
                movies.filter(movie =>
                    movie.title.toLowerCase().includes(searchField.toLowerCase())
                ))
        }
    }, [searchField, movies, favorites]);

    return (
        <div className={styles.resultsContainer}>
            {loading ? (<h2>Loading..</h2>)
                : (!filteredMovies ?
                    (<h2>Could not find any movies :/</h2>)
                    :
                    (
                        filteredMovies.map(movie =>
                            <MovieCard
                                key={movie.episode_id}
                                eps={movie.episode_id}
                                title={movie.title}
                                release={movie.release_date}
                            />))
                )}
        </div>
    );
}

export default MovieResults;
