import React, { useState } from 'react';
import { shortenUrl } from '../services/urlService';

const UrlForm = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await shortenUrl(originalUrl);
            setShortenedUrl(response.data.shortened_url);
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f4f4f4' }}>
            <div style={{ maxWidth: '400px', padding: '20px', background: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter URL"
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
                    />
                    <button type="submit" style={{ width: '100%', padding: '8px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Shorten</button>
                </form>
                {shortenedUrl && <p style={{ marginTop: '10px' }}>Shortened URL: {shortenedUrl}</p>}
            </div>
        </div>
    );
};

export default UrlForm;
