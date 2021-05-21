import styles from '../styles/Home.module.scss';
import MovieCard from './MovieCard';

function MovieResults() {
    return (
            <div className={styles.resultsContainer}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
    );
}

export default MovieResults;
