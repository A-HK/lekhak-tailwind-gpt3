
import axios from 'axios';
import { useEffect } from 'react';

export default function fetchUnsplashImages({imageUrls, setImageUrls, searchTerm}){
    console.log("searchTerm " + searchTerm);

    const getData = async() => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: searchTerm
          },
          headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`
          }
        })
    
        setImageUrls({images: response.data.results});
      };
    
      useEffect(() => {
        getData();
      }, [searchTerm]);
}