import '../styles/Home.scss'
import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { useFavorite } from '../context/MovieContext';

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
        <div className={styles.movieCard}>
            <div className={styles.favoriteButton} onClick={toggleFavorite}>
                {favorite ? <RiHeart3Fill /> : <RiHeartAddLine />}
            </div>
            <div className={styles.movieDetails}>
                <div className={styles.movieTitle}>{title}</div>
                <div className={styles.movieInfo}><p>Episode:{eps}</p> <p>{release}</p></div>
            </div>
        </div>
    );
}

export default MovieCard;