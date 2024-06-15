import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";
import { fetcher } from "../api/fetcher";
import { IMovie } from "../interface/movie.interface";

const categoriesUrl = {
  "Now Playing": "/now_playing",
  "Top Rated": "/top_rated",
  Upcoming: "/upcoming",
  Popular: "/popular",
};

interface IProps {
  sectionTitle: keyof typeof categoriesUrl;
}

export const Movies = ({ sectionTitle }: IProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getMovies = async () => {
    const data = await fetcher(categoriesUrl[sectionTitle]);

    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="mt-5 pl-3">
      <h2 className="text-3xl text-white font-semibold">{sectionTitle}</h2>
      <div className="flex gap-2 overflow-x-scroll mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};
