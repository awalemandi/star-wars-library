import Button from "../../components/Button";
import { AiOutlineRollback } from 'react-icons/ai';
import axios from 'axios';

export const getStaticPaths = async () => {
    const res = await axios.get('https://swapi.dev/api/films/');
    const data = await res.data.results;

    const paths = data.map(film => {
        return {
            params: { episode: film.episode_id.toString() }
        };
    });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const episode = context.params.episode;
    const res = await axios.get(`https://swapi.dev/api/films/${ episode }/`);
    const data = await res.data;

    return {
        props: { movie: data }
    };
};

export default function Movie({ movie }) {
    return (
        <div className='content'>
            <div className='moviePage'>
            <div className='backButton'><Button label="Movies" icon={<AiOutlineRollback />} /></div>
            <div className='movieDetails'>
                <h2>Episode: {movie.episode_id}</h2>
                <h1>{movie.title}</h1>
                <h3>Directed by: {movie.director}</h3>
                <h3>Produced by: {movie.producer}</h3>
                <h3>Release: {movie.release_date}</h3>
                <p>{movie.opening_crawl}</p>
                <div className='charactersList'>{movie.title}</div>
            </div>
            </div>
        </div>
    );
}
