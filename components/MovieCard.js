import styles from '../styles/Home.module.scss';
import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useState } from 'react';

function MovieCard({ eps, title, release }) {
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <div className={styles.movieCard}>
            <div className={styles.favoriteButton} onClick={handleFavorite}>
                {favorite ? <RiHeart3Fill /> : <RiHeartAddLine />}
            </div>
            <div className={styles.movieDetails}>
                <div className={styles.movieTitle}>A New Hope</div>
                <div className={styles.movieInfo}><p>Episode:4</p> <p>1977-05-25</p></div>
            </div>
        </div>
    );
}

export default MovieCard;