import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

export function useTheme () {
    return useContext( ThemeContext );
};

export function ThemeProvider ( { children } ) {
    const [ darkMode, setDarkMode ] = useState( true );
    return (
        <ThemeContext.Provider value={ [ darkMode, setDarkMode ] }>
            { children }
        </ThemeContext.Provider>
    );
};