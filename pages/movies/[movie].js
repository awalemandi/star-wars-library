import { useTheme } from '../../context/ThemeContext';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';



export default function Characters() {
    const [darkMode] = useTheme();
    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <div className={`root`}>
                <Nav />
                Movie Page
                <Footer />
            </div>
        </div>
    );
}
