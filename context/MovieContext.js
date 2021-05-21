import { useContext, createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

const MovieContext = createContext();
const FavoriteContext = createContext();

export function useMovie() {
    return useContext(MovieContext);
}

export function useFavorite() {
    return useContext(FavoriteContext);
}

export function MovieProvider({ children }) {
    const [movies, loading] = useFetch('https://swapi.dev/api/films/');
    const [favorites, setFavorites] = useState([]);
    return (
        <MovieContext.Provider value={[movies, loading]}>
            <FavoriteContext.Provider value={[favorites, setFavorites]}>
                {children}
            </FavoriteContext.Provider>
        </MovieContext.Provider>
    );
}