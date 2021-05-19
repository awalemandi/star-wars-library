import { useState, useContext, createContext } from 'react';

const SearchContext = createContext();

export function useSearch () {
    return useContext( SearchContext );
};

export function SearchProvider ( { children } ) {
    const [ searchField, setSearchField ] = useState( '' );
    return (
        <SearchContext.Provider value={ [ searchField, setSearchField ] }>
            { children }
        </SearchContext.Provider>
    );
};