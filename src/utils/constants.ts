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

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/"