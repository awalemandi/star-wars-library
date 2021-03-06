import { useTheme } from '../../context/ThemeContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import darkLogo from '../../public/images/logo_white.png';
import lightLogo from '../../public/images/logo_black.png';
import darkIcon from '../../public/images/dark_icon.png';
import lightIcon from '../../public/images/light_icon.png';
import Search from '../Search';


function Nav () {
    const [ darkMode, setDarkMode ] = useTheme();
    const router = useRouter();

    const handleTheme = () => {
        setDarkMode( !darkMode );
    };
    return (
        <nav>
            <div className={ `iconsContainer` }>
                <Link href="/" >
                    <a><
                        img
                        className={ `logo` }
                        src={ darkMode ? darkLogo : lightLogo }
                        alt='logo'
                    />
                    </a>
                </Link>
                <img
                    className={ `themeIcon` }
                    src={ darkMode ? darkIcon : lightIcon }
                    alt='toggle theme'
                    onClick={ handleTheme }
                />
            </div>
            <div className={ `navItemsContainer` }>
                <Link href="/" >
                    <div className={ router.pathname == '/' ? `activeLinkItem` : `linkItem` }>HOME</div>
                </Link>
                <Search />
            </div>
        </nav>
    );
}

export default Nav;
