import { useEffect, useState } from 'react';
import { useFavorite, useMovie } from '../context/MovieContext';
import { useSearch } from '../context/SearchContext';
import styles from '../styles/Home.module.scss';
import MovieCard from './MovieCard';

function MovieResults({ }) {
    const [searchField] = useSearch();
    const [movies, loading] = useMovie();
    const [favorites] = useFavorite();
    const [filteredMovies, setFilteredMovies] = useState([]);

    const filterMovies = () => {
        try {
            movies && setFilteredMovies(
                movies.filter(film =>
                    film.title.toLowerCase().includes(searchField.toLowerCase())
                ));
        } catch (error) { console.log(error); }
    };

    useEffect(() => {
        console.log(favorites);
        filterMovies();
    }, [searchField, movies, favorites]);

    return loading ? (
        <div className={styles.resultsContainer}><h2>Loading...</h2></div>
    ) : (
        <div className={styles.resultsContainer}>
            {/* {
                favorites.map(movie => (
                    <MovieCard
                        key={movie.episode_id}
                        eps={movie.episode_id}
                        title={movie.title}
                        release={movie.release_date}
                    />
                ))
            } */}
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
