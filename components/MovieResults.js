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
        if (!loading) {
            try {
                console.log(movies);
                setFilteredMovies(
                    movies.filter(movie =>
                        movie.title.toLowerCase().includes(searchField.toLowerCase())
                    ));
            } catch (error) { console.log(error); };
        }
    };

    useEffect(() => {
        let mounted = true;
        mounted && filterMovies();

        return () => {
            mounted = false;
        };
    }, [searchField, favorites]);

    return loading ? (
        <div className={styles.resultsContainer}>Loading...</div>
    ) : (
        <div className={styles.resultsContainer}>
            {!filteredMovies ? (
                <h2>Could not find any movies :/</h2>
            ) : (
                filteredMovies.map(movie => (
                    <MovieCard
                        key={movie.episode_id}
                        eps={movie.episode_id}
                        title={movie.title}
                        release={movie.release_date}
                    />
                ))
            )}
        </div>
    );
}

export default MovieResults;
