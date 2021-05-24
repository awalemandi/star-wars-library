import { useEffect, useState } from 'react';
import { useMovieFetch, useMovieList } from '../context/MovieContext';
import { useSearch } from '../context/SearchContext';
// import styles from '../styles/Home.module.scss';
import MovieCard from './MovieCard';

function MovieResults({ }) {
    const [searchField] = useSearch();
    const [loading] = useMovieFetch();
    const [movieList, setMovieList] = useMovieList();
    const [filteredMovies, setFilteredMovies] = useState([]);


    const updateMovieList = id => {
        if (movieList) {
            // const updatedMovieList = movieList.forEach((film, i) => {
            //     if (film.episode_id === id) {
            //         movieList.splice(i, 1);
            //         movieList.unshift(film);
            //     }
            // });
            // setMovieList(updatedMovieList);
            setMovieList(movieList => movieList.forEach((film, i) => {
                if (film.episode_id === id) {
                    movieList.splice(i, 1);
                    movieList.unshift(film);
                }
            }));
        }
    };


    const filterMovies = () => {
        try {
            movieList && setFilteredMovies(
                movieList.filter(film =>
                    film.title.toLowerCase().includes(searchField.toLowerCase())
                ));
        } catch (error) { console.log(error); }
    };

    useEffect(() => {
        console.log(movieList);
        movieList && filterMovies();
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
                            eps={movie.episode_id}
                            title={movie.title}
                            release={movie.release_date}
                            updateList={updateMovieList}
                        />
                ))
            )}

        </div>
    );
}

export default MovieResults;
