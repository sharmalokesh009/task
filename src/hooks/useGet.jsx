import axios from 'axios';
import { useEffect, useState } from 'react'
import { baseUrl } from '../config/url';

const useGet = (endpoint) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = {
        'app-id': '6474a0ac378047044a17153d'
    }

    useEffect(() => {
setLoading(true)
        axios.get(`${baseUrl}${endpoint}`, {
            headers: headers
        })
            .then(res => {
                setResponse(res);
                setLoading(false)
            })
            .catch(err => {
                setError(err);
                setLoading(false)
            })
    }, [])


    return {
        response, loading, error
    }
}

export default useGet