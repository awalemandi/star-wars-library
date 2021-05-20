import { ThemeProvider } from '../context/ThemeContext';
import { SearchProvider } from '../context/SearchContext';
import '../styles/globals.scss';

function Home ( { Component, pageProps } ) {
  return (
    <ThemeProvider><SearchProvider><Component { ...pageProps } /></SearchProvider></ThemeProvider>
  );
}

export default Home;
