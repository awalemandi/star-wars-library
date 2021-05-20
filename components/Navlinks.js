import styles from '../styles/Navlinks.module.scss';
import Link from 'next/link';


function Navlinks() {
    return (
        <div className={styles.container}>

            <a >
                <Link href="/" >
                    Movie
                </Link>
            </a>



            <Link href="/characters" className={styles.linkItem}>
                characters
                    </Link>

        </div>
    );
}

export default Navlinks;
