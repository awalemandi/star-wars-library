import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Nav from '../components/Nav';
import { useTheme } from '../context/ThemeContext';


export default function Home () {
  const [ darkMode, setDarkMode ] = useTheme();
  return (
    <div className={ darkMode ? styles.dark : styles.light }>
      <div className={ styles.root }>
        <Head>
          <title>Star Wars Library</title>
          <meta name="description" content="A modern and responsive NextJS webiste for all the star wars related information." />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <Nav />
        <h1>This supposed to look cool.</h1>
        <p>What the actual?</p>
      </div>
    </div>
  );
}
