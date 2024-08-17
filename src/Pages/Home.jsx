import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APIKEY } from "../config";
import { Link } from "react-router-dom";

const Home = () => {
  let movies = useSelector((store) => store.movieStore.movies);
  console.log(movies);

  let series = useSelector((store) => store.seriesStore.series);
  console.log(series);

  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.length == 0) {LOAD_MOVIES
      const url = "https://imdb-top-100-movies.p.rapidapi.com/";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": APIKEY,
          "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((result) => dispatch({ type: "LOAD_MOVIES", payload: result }));
    }

    if (series.length == 0) {
      const url = "https://imdb-top-100-movies.p.rapidapi.com/series/";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": APIKEY,
          "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      fetch(url, options)
      .then((response) => response.json())
      .then((result) => dispatch({ type: "LOAD_SERIES", payload: result }));
    }
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <div className="grid grid-cols-4">
        {movies.slice(0, 4).map((movie) => {
          return (
            <div className="col-span-1 p-3" key={movie.id}>
              <img src={movie.image} alt="" />
            </div>
          );
        })}
      </div>
      <h1>
        <Link to="/movies">Show More</Link>
      </h1>

      <h1>Series</h1>
      <div className="grid grid-cols-4">
        {series.slice(0, 4).map((movie) => {
          return (
            <div className="col-span-1 p-3" key={movie.id}>
              <img src={movie.image} alt="" />
            </div>
          );
        })}
      </div>
      <h1>
        <Link to="/series">Show More</Link>
      </h1>
    </>
  );
};

export default Home;
