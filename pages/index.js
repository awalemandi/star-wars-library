import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home () {
  return (
    <div>
      <Head>
        <title>Star Wars Library</title>
        <meta name="description" content="A modern and responsive NextJS webiste for all the star wars related information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Star Wars App</h1>
    </div>
  );
}
