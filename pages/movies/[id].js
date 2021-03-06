import Button from "../../components/common/Button";
import { AiOutlineRollback } from 'react-icons/ai';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import CharacterChip from '../../components/CharacterChip';

export const getStaticPaths = async () => {
    try {
        const res = await axios.get('https://swapi.dev/api/films/');
        const data = await res.data.results;

        const paths = data.map(film => {
            return {
                params: { id: film.episode_id.toString() }
            };
        });

        return {
            paths,
            fallback: false
        };
    } catch (error) {
        console.log(error);
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await axios.get(`https://swapi.dev/api/films/${ id }/`);
    const data = await res.data;

    return {
        props: { movie: data }
    };
};

export default function Movie({ movie }) {
    return (
        <div className='content'>
            <Head>
                <title>Episode {movie.episode_id} | {movie.title}</title>
                <link rel="icon" href="/images/favicon.ico" /></Head>
            <div className='moviePage'>
                <Link href='/'>
                    <div className='backButton'>
                        <Button label="Movies" icon={<AiOutlineRollback />} />
                    </div>
                </Link>
                <div className='movieDetails'>
                    <h2>Episode: {movie.episode_id}</h2>
                    <h1>{movie.title}</h1>
                    <h3>Directed by: {movie.director}</h3>
                    <h3>Produced by: {movie.producer}</h3>
                    <h3>Release: {movie.release_date}</h3>
                    <h2>Crawling Text:</h2>
                    <p>{movie.opening_crawl}</p>
                    <h3>Characters:</h3>
                    <div className='characterContainer'>
                        {
                            movie.characters.map(
                                characterUrl => <
                                    CharacterChip
                                    key={Math.random() * 99}
                                    url={characterUrl}
                                />
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}
