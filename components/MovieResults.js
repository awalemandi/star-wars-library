import { useEffect, useState } from 'react';
import { useMovieFetch, useMovieList } from '../context/MovieContext';
import { useSearch } from '../context/SearchContext';
import MovieCard from './MovieCard';

function MovieResults ( { } ) {
    const [ searchField ] = useSearch();
    const [ loading ] = useMovieFetch();
    const [ movieList, setMovieList ] = useMovieList();
    const [ filteredMovies, setFilteredMovies ] = useState( [] );


    const updateList = ( movie, fav ) => {
        if ( movieList ) {
            const updatedMovieList = filteredMovies.filter( film => film !== movie );
            fav ? updatedMovieList.push( movie ) : updatedMovieList.unshift( movie );
            setFilteredMovies( updatedMovieList );
            console.log( 'updated Movie is: ' );
            console.log( movie );
            console.log( 'updatedMovieList is: ' );
            console.log( updatedMovieList );
        }
    };


    const filterMovies = () => {

        try {
            setFilteredMovies(
                movieList.filter( film =>
                    film.title.toLowerCase().includes( searchField.toLowerCase() )
                ) );
        } catch ( error ) { console.log( error ); }
    };

    useEffect( () => {
        if ( movieList ) {
            filterMovies();
        }
    }, [ searchField, movieList ] );

    return loading ? (
        <div className={ `resultsContainer` }><h2>Loading...</h2></div>
    ) : (
            <div className={ `resultsContainer` }>
                { !filteredMovies ? (
                    <h2>Could not find any movies :/</h2>
                ) : (
                        filteredMovies.map( movie => (
                            <MovieCard
                                key={ Math.random() * 999 }
                                favorite={ movie.favorite }
                                eps={ movie.episode_id }
                                title={ movie.title }
                                release={ movie.release_date }
                                updateList={ updateList }
                                currentMovie={ movie }
                            />
                        ) )
                    ) }

            </div>
        );
}

export default MovieResults;
