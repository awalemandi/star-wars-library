import { useState, useEffect } from 'react';
import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useMovieList } from '../context/MovieContext';
import Link from 'next/link';
import useLocalStorage from '../hooks/useLocalStorage';


function MovieCard({ favorite, eps, title, release, updateList, currentMovie }) {
    const [movieList, setMovieList] = useMovieList();

    const changeFavorite = (obj, fav) => {
        return ({ ...obj, favorite: fav });
    };

    const toggleFavorite = () => {
        if (title && eps) {
            if (favorite) {
                setMovieList(movieList.map(
                    movie => {
                        return (movie.title === title) ? changeFavorite(movie, false) : movie;
                    }
                ));
                updateList(currentMovie, false);

            } else {
                setMovieList(movieList.map(
                    movie => {
                        return (movie.title === title) ? changeFavorite(movie, true) : movie;
                    }
                ));
                updateList(currentMovie, true);
            }
        }
    };

    return (
        <div className={`movieCard`}>
            <div className={`favoriteButton`} onClick={toggleFavorite}>
                {favorite ? <RiHeart3Fill /> : <RiHeartAddLine />}
            </div>
            <Link href={`/movies/${ eps }`}>
                <div className={`movieDetails`} >
                    <div className={`movieTitle`}>{title}</div>
                    <div className={`movieInfo`}><p>Episode:{eps}</p> <p>{release}</p></div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;