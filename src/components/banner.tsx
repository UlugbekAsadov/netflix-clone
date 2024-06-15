import { useEffect, useState } from "react";
import { IMovie } from "../interface/movie.interface";
import { fetcher } from "../api/fetcher";

export const Banner = () => {
  const [movie, setMovie] = useState<IMovie | null>(null);

  const getRandomMovie = async () => {
    const data = await fetcher("/popular");

    const randomNumber = Math.floor(Math.random() * data.length);

    setMovie(data[randomNumber]);
  };

  useEffect(() => {
    getRandomMovie();
  }, []);

  if (!movie) {
    return null;
  }

  return (
    <div
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
      className="w-full h-[700px] bg-no-repeat bg-cover relative"
    >
      <div className="flex flex-col justify-center h-full px-3 bg-black/30">
        <h2 className="text-4xl font-bold text-white">{movie?.title}</h2>
        <p className="w-full md:w-1/3 text-white mt-3">{movie?.overview}</p>
      </div>

      <div className="absolute w-full h-1/3 bottom-0 left-0 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};
