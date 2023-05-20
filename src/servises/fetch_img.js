    import axios from 'axios';

    const API_KEY = '34769662-caad36a1f3170139f3332b200';  
    const BASE_URL = 'https://pixabay.com/api/';

    const baseSearchParameters = {
        per_page: 12,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch:'true',
    };

    export const serchPhoto = (searchImages, page) => {

        const searchParameters = new URLSearchParams({
            q: searchImages,
            page: Number(page),
            ...baseSearchParameters,
        });

        try {
            return axios.get(`${BASE_URL}/?${searchParameters}`);
        }
        
        catch (error) {
            throw new Error(error.message);
        }
};
    


