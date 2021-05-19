
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import darkLogo from '../public/images/logo_white.png';
import lightLogo from '../public/images/logo_black.png';

function Nav () {
    const [ darkMode, setDarkMode ] = useTheme();
    return (
        <div>
            <Image
                // className={ styles.logo }
                src={ darkMode ? darkLogo : lightLogo }
                alt='logo'
                width={ 100 }
                height={ 35 }
            />
        </div>
    );
}

export default Nav;
