import styles from '../styles/Results.module.scss';
import { useTheme } from '../context/ThemeContext';


function MovieResults() {
    const [darkMode] = useTheme();
    return (
        <div className={darkMode ? styles.dark : styles.light}>
            <div className={styles.root}>
            <div className={styles.resultsContainer}>
                gdfgdf
            </div>
            </div>
        </div>
    );
}

export default MovieResults;
