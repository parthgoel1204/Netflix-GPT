export const USER_AVATAR: string = "https://netflixproject-mu.vercel.app/user-icon.png"

export const URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_TOKEN,
  },
};
