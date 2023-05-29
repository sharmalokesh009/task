import axios from 'axios';
import { useState } from 'react'
import { baseUrl } from '../config/url';

const useDelete = (endpoint) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = {
        'app-id': '6474a0ac378047044a17153d'
    }

    const postData = (data) => {
        setLoading(false)
        axios.delete(`${baseUrl}${endpoint}`, {
            headers: headers
        })
            .then(res => {
                setResponse(res);
                setLoading(true)
            })
            .catch(err => {
                setError(err);
                setLoading(true)
            })
    }
    return {
        postData, response, loading, error
    }
}

export default useDelete;
