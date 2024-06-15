import { IMovie } from "../interface/movie.interface";

export const fetcher = async (url: string): Promise<IMovie[]> => {
  const accessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(baseUrl + url, config);

  const data = await response.json();

  return data.results;
};
