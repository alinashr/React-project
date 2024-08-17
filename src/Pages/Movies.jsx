import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APIKEY } from "../config";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const Movies = () => {
  let movies = useSelector((store) => store.movieStore.movies);

  return (
    <>
      <h1>Movies</h1>
      <div className="grid grid-cols-5">
        {movies.map((movie) => {
          return <div className="col-span-1 p-3">
              <img src={movie.image} alt="" />
              <h1><b> {movie.title}</b></h1>
              <h2>{movie.year}  
              {/* <Rating value={movie.rating} readOnly max={5} precision={0.25}></Rating> */}
              <Link to ={`/movies/${movie.id}`}>
              <button className="bg-blue-500 hover:bg-blue-300 active:bg-blue-700 w-full py-2 rounded-lg">View Details</button>           
              </Link>
              </h2>
            </div>
        })
        }
      </div>

      <h1><Link to='/movies'>Show More</Link></h1>
    </>
  )
}

export default Movies;
