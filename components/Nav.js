
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import darkLogo from '../public/images/logo_white.png';
import lightLogo from '../public/images/logo_black.png';
import darkIcon from '../public/images/dark_icon.png';
import lightIcon from '../public/images/light_icon.png';
import Search from './Search';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';


function Nav () {
    const [ darkMode, setDarkMode ] = useTheme();

    const handleTheme = () => {
        setDarkMode( !darkMode );
    };
    return (
        <div className={ styles.navbarContainer }>
            <div className={ styles.iconsContainer }>
                <img
                    className={ styles.logo }
                    src={ darkMode ? darkLogo : lightLogo }
                    alt='logo'
                />
                <img
                    className={ styles.themeIcon }
                    src={ darkMode ? lightIcon : darkIcon }
                    alt='toggle theme'
                    onClick={ handleTheme }
                />
                {/* <button onClick={handleTheme}>ICON</button> */ }
            </div>
            <div className={ styles.navItemsContainer }>
                <Link href="/" >
                    <div className={ styles.linkItem }>MOVIES</div>
                </Link>

                <Link href="/characters" >
                    <div className={ styles.linkItem }>CHARACTERS</div>
                </Link>
                <Search />
            </div>
            <div className={ styles.mobileIcon }>
                <HiOutlineMenuAlt4 />
            </div>
        </div>
    );
}

export default Nav;
