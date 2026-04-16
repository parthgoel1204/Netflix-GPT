export const USER_AVATAR: string = "https://netflixproject-mu.vercel.app/user-icon.png"

export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?&page=1';
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_TOKEN,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English" }, 
  {identifier: "hindi", name: "Hindi" }, 
  {identifier: "spanish", name: "Spanish" }
]