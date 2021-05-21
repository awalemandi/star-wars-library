import { useContext, createContext, useState } from 'react';

const MovieContext = createContext();
const FavoriteContext = createContext();

export function useMovie() {
    return useContext(MovieContext);
}

export function useFavorite() {
    return useContext(FavoriteContext);
}

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            <FavoriteContext.Provider value={[favorites, setFavorites]}>
                {children}
            </FavoriteContext.Provider>
        </MovieContext.Provider>
    );
}