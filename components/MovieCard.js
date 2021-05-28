import { useState, useEffect } from 'react';
import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useMovieList } from '../context/MovieContext';
import Link from 'next/link';

function MovieCard({ favorite, eps, title, release, updateList, currentMovie }) {
    const [movieList, setMovieList] = useMovieList();
    const [isFavorite, setIsFavorite] = useState(favorite ? true : false);
    // const [favoriteIcon, setFavoriteIcon] = useState(<RiHeartAddLine />);

    const changeFavorite = (obj, fav) => {
        return ({ ...obj, favorite: fav });
    };

    const toggleFavorite = () => {
        setIsFavorite(!favorite);
        const updatedMovie = changeFavorite(currentMovie, !isFavorite);
        updateList(updatedMovie, !isFavorite);

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