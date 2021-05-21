import { ThemeProvider } from '../context/ThemeContext';
import { SearchProvider } from '../context/SearchContext';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import { MovieProvider } from '../context/MovieContext';

function Home({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SearchProvider>
        <MovieProvider>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </MovieProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default Home;
