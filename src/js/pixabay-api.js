// function HTTP request
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44067524-7b37ef940db212c179aad5861';

export async function fetchImages(query, page = 1, perPage = 15) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw new Error('Failed to fetch images');
    }
}