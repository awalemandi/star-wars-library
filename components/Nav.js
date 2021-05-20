
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Nav.module.scss';
import darkLogo from '../public/images/logo_white.png';
import lightLogo from '../public/images/logo_black.png';

function Nav () {
    const [ darkMode, setDarkMode ] = useTheme();
    return (
        <div className={styles.navbarContainer}>
            <img
                className={ styles.logo }
                src={ darkMode ? darkLogo : lightLogo }
                alt='logo'
            />
            <div className={styles.itemsContainer}>

            </div>
        </div>
    );
}

export default Nav;
