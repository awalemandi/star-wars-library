
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Nav.module.scss';
import darkLogo from '../public/images/logo_white.png';
import lightLogo from '../public/images/logo_black.png';
import Navlinks from './Navlinks';
import Search from './Search';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';


function Nav() {
    const [darkMode, setDarkMode] = useTheme();
    return (
        <div className={styles.navbarContainer}>
            <img
                className={styles.logo}
                src={darkMode ? darkLogo : lightLogo}
                alt='logo'
            />
            <div className={styles.itemsContainer}>
                <Navlinks />
                <Search />
                <div className={styles.mobileIcon}>
                    <HiOutlineMenuAlt4 />
                </div>
            </div>
        </div>
    );
}

export default Nav;
