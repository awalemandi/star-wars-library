import { useState, useEffect } from 'react';
import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useMovieList } from '../context/MovieContext';
import Link from 'next/link';
import useLocalStorage from '../hooks/useLocalStorage';


function MovieCard ( { favorite, eps, title, release, updateList, currentMovie } ) {
    const [ movieList, setMovieList ] = useMovieList();
    const [ selectedMovie, setSelectedMovie ] = useState( {} );

    useEffect( () => {
        let mounted = true;
        //compares the ids to identify the moviei
        if ( mounted ) {
            setSelectedMovie( currentMovie );
        }
        return () => { mounted = false; };
    }, [ movieList ] );


    //compares the ids to identify the movie
    // const selectedMovie = movieList.filter( film => film.episode_id === eps )[ 0 ];

    const changeFavorite = ( obj, fav ) => {
        return ( { ...obj, favorite: fav } );
    };

    const toggleFavorite = () => {
        if ( title && eps ) {
            if ( favorite ) {
                setMovieList( movieList.map(
                    movie => {
                        return ( movie.title === selectedMovie.title ) ? changeFavorite( movie, false ) : movie;
                    }
                ) );
                updateList( selectedMovie, true );

            } else {
                setMovieList( movieList.map(
                    movie => {
                        return ( movie.title === selectedMovie.title ) ? changeFavorite( movie, true ) : movie;
                    }
                ) );
                updateList( selectedMovie, false );
            }
        }
    };

    return (
        <div className={ `movieCard` }>
            <div className={ `favoriteButton` } onClick={ toggleFavorite }>
                { favorite ? <RiHeart3Fill /> : <RiHeartAddLine /> }
            </div>
            <Link href={ `/movies/${ eps }` }>
                <div className={ `movieDetails` }>
                    <div className={ `movieTitle` }>{ title }</div>
                    <div className={ `movieInfo` }><p>Episode:{ eps }</p> <p>{ release }</p></div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;