import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Nav from '../components/Nav';
import { useTheme } from '../context/ThemeContext';
import MovieResults from '../components/MovieResults';
import Footer from '../components/Footer';

export default function Home() {
  const [darkMode] = useTheme();
  return (
    // <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.root}>
        <Head>
          <title>Star Wars Library</title>
          <meta name="description" content="A modern and responsive NextJS webiste for all the star wars related information." />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <Nav />
        <MovieResults />
        <Footer />
      </div>
    // </div>
  );
}