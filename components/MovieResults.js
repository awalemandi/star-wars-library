import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useMovieFetch, useMovieList } from '../context/MovieContext';
import { useSearch } from '../context/SearchContext';
import MovieCard from './MovieCard';

function MovieResults({ }) {
    const [searchField] = useSearch();
    const [loading] = useMovieFetch();
    const [movieList, setMovieList] = useMovieList();
    const [filteredMovies, setFilteredMovies] = useState([]);


    const moveToTop = (id, unfav) => {
        if (movieList) {
            const selectedMovie = filteredMovies.filter(film => film.episode_id === id)[0];
            const updatedMovieList = filteredMovies.filter(film => film.episode_id !== id);
            unfav ? updatedMovieList.push(selectedMovie) : updatedMovieList.unshift(selectedMovie);
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
