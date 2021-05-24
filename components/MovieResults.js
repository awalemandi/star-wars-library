import { useEffect, useState } from 'react';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { useMovieFetch, useMovieList } from '../context/MovieContext';
import { useSearch } from '../context/SearchContext';
// import styles from '../styles/Home.module.scss';
import MovieCard from './MovieCard';

function MovieResults({ }) {
    const [searchField] = useSearch();
    const [loading] = useMovieFetch();
    const [movieList, setMovieList] = useMovieList();
    const [filteredMovies, setFilteredMovies] = useState([]);


    const moveToTop = id => {
        if (movieList) {
            const selectedMovie = filteredMovies.filter(film => film.episode_id === id)[0];
            console.log(selectedMovie);
            const updatedMovieList = filteredMovies.filter(film => film.episode_id !== id);
            updatedMovieList.unshift(selectedMovie);
            console.log(updatedMovieList);
            setFilteredMovies(updatedMovieList);
        }

    };


    const filterMovies = () => {
        try {
            setFilteredMovies(
                movieList.filter(film =>
                    film.title.toLowerCase().includes(searchField.toLowerCase())
                ));
        } catch (error) { console.log(error); }
    };

    useEffect(() => {
        if (movieList) {
            console.log(filteredMovies);
            filterMovies();
        }
    }, [searchField, movieList]);

    return loading ? (
        <div className={`resultsContainer`}><h2>Loading...</h2></div>
    ) : (
        <div className={`resultsContainer`}>
            {!filteredMovies ? (
                <h2>Could not find any movies :/</h2>
            ) : (
                filteredMovies.map(movie => (
                    <MovieCard
                        key={movie.episode_id}
                        url={movie.url}
                        eps={movie.episode_id}
                        title={movie.title}
                        release={movie.release_date}
                        updateList={moveToTop}
                    />
                ))
            )}

        </div>
    );
}

export default MovieResults;
