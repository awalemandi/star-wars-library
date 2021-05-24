import { RiHeartAddLine, RiHeart3Fill } from 'react-icons/ri';
import { useMovieList } from '../context/MovieContext';
import Link from 'next/link';


function MovieCard({ favorite, eps, title, release, updateList }) {
    const [movieList, setMovieList] = useMovieList();

    const changeFavorite = (obj, fav) => {
        return ({ ...obj, favorite: fav });
    };

    const toggleFavorite = () => {
        if (title && eps) {
            //compares the ids to find the selected movie
            const selectedMovie = movieList.filter(film => film.episode_id === eps)[0];
            if (favorite) {
                setMovieList(movieList.map(
                    movie => {
                        return (movie === selectedMovie) ? changeFavorite(movie, false) : movie;
                    }
                ));
                updateList(selectedMovie, true);

            } else {
                setMovieList(movieList.map(
                    movie => {
                        return (movie === selectedMovie) ? changeFavorite(movie, true) : movie;
                    }
                ));
                updateList(selectedMovie, false);
            }

        }
    };

    return (
        <div className={`movieCard`}>
            <div className={`favoriteButton`} onClick={toggleFavorite}>
                {favorite ? <RiHeart3Fill /> : <RiHeartAddLine />}
            </div>
            <Link href={`/movies/${ eps }`}>
                <div className={`movieDetails`}>
                    <div className={`movieTitle`}>{title}</div>
                    <div className={`movieInfo`}><p>Episode:{eps}</p> <p>{release}</p></div>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;