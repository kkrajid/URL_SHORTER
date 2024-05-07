import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const shortenUrl = async (originalUrl) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/shorten/`, { original_url: originalUrl });
        return response;
    } catch (error) {
        throw error;
    }
};

export const getOriginalUrl = async (shortenedUrl) => {
    try {
        const response = await axios.get(`${BASE_URL}/${shortenedUrl}/`);
        return response;
    } catch (error) {
        throw error;
    }
};
