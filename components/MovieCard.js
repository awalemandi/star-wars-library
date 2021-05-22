import styles from '../styles/Home.module.scss';
import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { useFavorite } from '../context/MovieContext';

function MovieCard({ eps, title, release }) {
    const [favorites, setFavorites] = useFavorite();
    const [favorite, setFavorite] = useState(false);

    const updateFavorites = () => {
        const film = {
            episode_id: eps,
            title: title,
            release_date: release
        };
        if (favorite) {
            const newFavorites = [...favorites, film];
            setFavorites([...new Set(newFavorites)]);
        } else {
            const newFavorites = favorites.filter(film => film.episode_id !== eps);
            setFavorites(newFavorites);
        }
    };

    const toggleFavorite = () => setFavorite(favorite => !favorite);

    useEffect(() => {
        let mounted = true;
        mounted && updateFavorites();
        return () => {
            mounted = false;
        };
    }, [favorite]);

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