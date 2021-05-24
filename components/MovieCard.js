// import styles from '../styles/Home.module.scss';
import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { useFavorite } from '../context/MovieContext';
import Link from 'next/link';


function MovieCard({ eps, title, release, updateList }) {
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(favorite => !favorite);
        updateList(eps);
    };

    // useEffect(() => {
    //     let mounted = true;

    //     mounted && updateMovieList();

    //     return () => {
    //         mounted = false;
    //     };
    // }, [favorite]);

    return (
        <div className={`movieCard`}>
            <div className={`favoriteButton`} onClick={toggleFavorite}>
                {favorite ? <RiHeart3Fill /> : <RiHeartAddLine />}
            </div>
            <Link href={`/movies/${eps}`}>
                <div className={`movieDetails`}>
                    <div className={`movieTitle`}>{title}</div>
                    <div className={`movieInfo`}><p>Episode:{eps}</p> <p>{release}</p></div>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;