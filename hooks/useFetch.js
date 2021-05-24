import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState({});

    useEffect(() => {
        let source = axios.CancelToken.source();
        setLoading(true);

        const fetchData = async () => {
            try {
                const res = await axios.get(url, {
                    cancelToken: source.token
                });
                setResponse(res.data);
            } catch (error) {
                console.log(axios.isCancel(error) ? 'Caught cancel' : error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            source.cancel();
        };
    }, [url]);

    return [response, loading];
};

export default useFetch;