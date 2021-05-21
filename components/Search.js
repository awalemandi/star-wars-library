import { FiSearch } from 'react-icons/fi';
import { useSearch } from '../context/SearchContext';
import styles from '../styles/Nav.module.scss';

function Search() {
    const [searchField, setSearchField] = useSearch();

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    return (
        <div className={styles.searchContainer}>

            <input
                className={styles.search}
                onChange={handleChange}
                placeholder='Search...'
                type='text'
                value={searchField}
            />
            <button className={styles.searchButton}><FiSearch /></button>
        </div>
    );
}

export default Search;
