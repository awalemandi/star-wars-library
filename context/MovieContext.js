import { useContext, createContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';

const MovieFetchContext = createContext();
const MovieListContext = createContext();

export function useMovieFetch() {
    return useContext(MovieFetchContext);
}

export function useMovieList() {
    return useContext(MovieListContext);
}

export function MovieProvider({ children }) {
    const [movieData, loading] = useFetch('https://swapi.dev/api/films/');
    const [movieList, setMovieList] = useLocalStorage('movieList', []);

    useEffect(() => {
        let mounted = true;
        //only set the movieList on initial load otherwise use localStorage
        if (!window.localStorage.getItem('movieList')) {
            //add favorite: false to each movie object
            const getMovieList = async () => {
                const list = await movieData.results;
                if (list) {
                    const updatedMovies = await list.map(movie => ({ ...movie, favorite: false }));
                    setMovieList(updatedMovies);
                }
            };

            mounted && getMovieList();
            return () => { mounted = false; };
        }
    }, [movieData]);

    return (
        <MovieFetchContext.Provider value={[loading]}>
            <MovieListContext.Provider value={[movieList, setMovieList]}>
                {children}
            </MovieListContext.Provider>
        </MovieFetchContext.Provider>
    );
}