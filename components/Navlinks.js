import styles from '../styles/Nav.module.scss';

function Navlinks () {
    return (
        <div className={ styles.navLinks }>
            <link>Movies</link>
            <link>Characters</link>
        </div>
    );
}

export default Navlinks;
