import '../styles/globals.scss';
import { ThemeProvider } from '../context/ThemeContext';
import { SearchProvider } from '../context/SearchContext';

function MyApp ( { Component, pageProps } ) {
  return <ThemeProvider><SearchProvider><Component { ...pageProps } /></SearchProvider></ThemeProvider>;
}

export default MyApp;
