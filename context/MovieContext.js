import { useContext, createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';

const MovieFetchContext = createContext();
const MovieListContext = createContext();
// const FavoritesListContext = createContext();

export function useMovieFetch() {
    return useContext(MovieFetchContext);
}

export function useMovieList() {
    return useContext(MovieListContext);
}

// export function useFavorite() {
//     return useContext(FavoritesListContext);
// }

export function MovieProvider({ children }) {
    const [movieData, loading] = useFetch('https://swapi.dev/api/films/');
    const [movieList, setMovieList] = useLocalStorage('movieList', []);
    // const [favoriteMovies, setFavoriteMovies] = useLocalStorage('favoriteMovies', []);


    useEffect(() => {
        let mounted = true;
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

    }, [movieData]);

    return (
        <MovieFetchContext.Provider value={[loading]}>
            <MovieListContext.Provider value={[movieList, setMovieList]}>
                {/* <FavoritesListContext.Provider value={[favoriteMovies, setFavoriteMovies]}> */}
                {children}
                {/* </FavoritesListContext.Provider> */}
            </MovieListContext.Provider>
        </MovieFetchContext.Provider>
    );
}