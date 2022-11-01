import React from "react";
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import '../styles/singleMovie.css'
import Loading from "./Loading";

const SingleMovie = () => {
  const { id } = useParams();

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);
  if(isLoading){
    return(<Loading/>)

  }else{
    return (
      <>
        <div class="heading">
          <h1>Movie Info</h1>
        </div>
        <div class="container">
          <div class="dataPoster child">
            <img
              src={movie.Poster}
              alt=""
            />
          </div>
          <div class="dataInfo child">
            <table>
              <tr>
                <td>Title : </td>
                <td>{movie.Title}</td>
              </tr>
              <tr>
                <td> Type : </td>
                <td>{movie.Type} </td>
              </tr>
              <tr>
                <td> Released : </td>
                <td> {movie.Released} </td>
              </tr>
              <tr>
                <td>Country : </td>
                <td>{movie.Country} </td>
              </tr>
              <tr>
                <td> Year: </td>
                <td> {movie.Year} </td>
              </tr>
              <tr>
                <td> imdb Rating: </td>
                <td> {movie.imdbRating} </td>
              </tr>
              <tr>
                <td> Runtime: </td>
                <td> {movie.Runtime} </td>
              </tr>
              <tr>
                <td> Actors: </td>
                <td> {movie.Actors} </td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );

  }

  
};

export default SingleMovie;
