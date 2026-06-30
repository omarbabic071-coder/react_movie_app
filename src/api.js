import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTBhNzcxNGM0NGNjZjllNDNhNTA4ZTJkYzlkMmMzNyIsIm5iZiI6MTc4MTQ0ODY5Mi44Miwic3ViIjoiNmEyZWJmZjQ5MmVjMjZjZjMxOTU0MjdiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wBgQ8yOKj-K4vhNvmmWnX4Ids5UamVrln9u6Vpz-No0",
  },
});

export async function requestApi(endpoint, params = {}) {
  const response = await api.get(endpoint, { params });
  return response.data;
}

export function searchMovies(query) {
  return requestApi("/search/movie", {
    query,
    include_adult: "true",
    language: "en-US",
    page: 1,
  });
}

export function getTrendingMovies() {
  return requestApi("/trending/movie/week");
}
