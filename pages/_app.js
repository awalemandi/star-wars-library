import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { SearchProvider } from '../context/SearchContext';
import '../styles/globals.scss';
import Layout from '../components/layout/Layout';
import { MovieProvider } from '../context/MovieContext';

function withContext(Component) {
  return (props) => (
    <ThemeProvider>
      <SearchProvider>
        <MovieProvider>
          <Component {...props} />
        </MovieProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

function Home({ Component, pageProps }) {
  const [darkMode] = useTheme();
  return (

    <div className={darkMode ? `dark` : `light`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>

  );
}

export default withContext(Home);
