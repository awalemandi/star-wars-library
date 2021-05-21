import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState({});

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setResponse(res.data.results);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return [response, loading];
};

export default useFetch;