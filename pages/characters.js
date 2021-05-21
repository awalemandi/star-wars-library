import styles from '../styles/Characters.module.scss';
import { useTheme } from '../context/ThemeContext';



export default function Characters() {
    const [darkMode] = useTheme();
    return (
        <div className={darkMode ? styles.dark : styles.light}>
            <div className={styles.root}>

            </div>
        </div>
    );
}
