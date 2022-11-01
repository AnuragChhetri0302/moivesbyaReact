import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contextApi/context";
import "../styles/movie.css";
import Loading from "./Loading";
const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  return (
    <>
      {!isLoading ? (
        <div className="container">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            return (
              
              <div className="card" key={imdbID}>
                
                <img src={Poster} alt={Poster} />
                
                <NavLink to={`/movie/${imdbID}`}> <h4>
                    {Title.length > 15 ? Title.substring(0, 20) + `...` : Title}
                  </h4></NavLink>
               
              </div>
              
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Movie;


