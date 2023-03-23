import axios from "axios";

export default function fetchUnsplashImages({ searchTerm }) {
  return axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: searchTerm,
    },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`,
    },
  });
}
