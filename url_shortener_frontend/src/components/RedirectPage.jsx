import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOriginalUrl } from '../services/urlService';

const RedirectPage = () => {
    const { shortenedUrl } = useParams();
    const [originalUrl, setOriginalUrl] = useState('');

    useEffect(() => {
        const fetchOriginalUrl = async () => {
            try {
                const response = await getOriginalUrl(shortenedUrl);
                setOriginalUrl(response.data.original_url);
            } catch (error) {
                console.error('Error retrieving original URL:', error);
            }
        };
        fetchOriginalUrl();
    }, [shortenedUrl]);

    if (originalUrl) {
        window.location.href = originalUrl;
    }

    return <p>Redirecting...</p>;
};

export default RedirectPage;
