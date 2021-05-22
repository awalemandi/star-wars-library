import { FiSearch } from 'react-icons/fi';
import { useSearch } from '../context/SearchContext';

function Search() {
    const [searchField, setSearchField] = useSearch();

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    return (
        <div className={`searchContainer`}>

            <input
                className={`search`}
                onChange={handleChange}
                placeholder='Search...'
                type='text'
                value={searchField}
            />
            {/* <button className={`searchButton`}><FiSearch /></button> */}
        </div>
    );
}

export default Search;
