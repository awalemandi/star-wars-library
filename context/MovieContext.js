import { useContext, createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

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
    const [movieList, setMovieList] = useState([]);


    useEffect(() => {
        let mounted = true;

        const getMovieList = async () => {
            const list = await movieData;
            setMovieList(movieData.results);
        };

        mounted && getMovieList();
        return () => { mounted = false; };

    }, [movieData]);

    return (
        <MovieFetchContext.Provider value={[loading]}>
            <MovieListContext.Provider value={[movieList, setMovieList]}>
                {children}
            </MovieListContext.Provider>
        </MovieFetchContext.Provider>
    );
}