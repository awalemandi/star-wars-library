
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import darkLogo from '../public/images/logo_white.png';
import lightLogo from '../public/images/logo_black.png';
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
            <div className={styles.navItemsContainer}>
                <Link href="/" >
                    <div className={styles.linkItem}>Movies</div>
                </Link>

                <Link href="/characters" >
                    <div className={styles.linkItem}>Characters</div>
                </Link>
                <Search />
            </div>
            <div className={styles.mobileIcon}>
                <HiOutlineMenuAlt4 />
            </div>
        </div>
    );
}

export default Nav;
