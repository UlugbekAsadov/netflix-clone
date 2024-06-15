import { IMovie } from "../interface/movie.interface";

export const MovieCard = (props: IMovie) => {
  return (
    <div className="relative w-[160px] group cursor-pointer">
      <img
        src={`http://image.tmdb.org/t/p/w500${props.poster_path}`}
        alt="movie"
        className="min-w-[160px] rounded-xl"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-80 hidden group-hover:flex group-hover:animate-popup flex-col justify-end transition p-3">
        <p className="text-white">{props.title}</p>

        <div className="flex justify-between items-center text-white text-sm">
          <p>{props.vote_average.toFixed(1)}/10</p>
          <p>{props.release_date}</p>
        </div>
      </div>
    </div>
  );
};
