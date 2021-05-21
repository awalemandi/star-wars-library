import styles from '../styles/Home.module.scss';

const Copyright = () => {
    return (
        <div>
            {'Copyright © '}
            <a href='https://github.com/awalemandi/tally'>
                Star Wars Library
			</a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </div>
    );
};

function Footer() {
    return (
        <footer className={styles.footer}>
            <Copyright />
        </footer>
    );
}

export default Footer;
