import FiSearch from 'react-icons/fi';
import { useSearch } from '../context/SearchContext';

function Search () {
    const [ searchField, setSearchField ] = useSearch();

    const handleChange = e => {
        setSearchField( e.target.value );
    };

    return (
        <div className=''>
            <input type='search' className='search-field' onChange={ handleChange } />
            <FiSearch className='icon' />
        </div>
    );
}

export default Search;
