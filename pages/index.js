import Head from 'next/head';
import MovieResults from '../components/MovieResults';

export default function Home() {
  return (
    <div className='content'>
      <Head>
        <title>Star Wars Library</title>
        <meta name="description" content="A modern and responsive NextJS webiste for all the star wars related information." />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <MovieResults />
    </div>
  );
}