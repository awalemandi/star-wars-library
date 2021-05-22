import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useTheme } from '../context/ThemeContext';
import MovieResults from '../components/MovieResults';

export default function Home() {
  const [darkTheme] = useTheme();
  return (
    <div className={`content`}>
      <Head>
        <title>Star Wars Library</title>
        <meta name="description" content="A modern and responsive NextJS webiste for all the star wars related information." />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className={styles.resultsContainer}>
        <MovieResults />
      </div>
    </div>
  );
}