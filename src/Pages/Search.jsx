import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  let [search_result, setSearchResult] = useState([]);
  let [collection, setCollection] = useState([])
  let movies = useSelector((store) => store.movieStore.movies);
  let series = useSelector((store) => store.seriesStore.series);

  let [search, setSearch] = useState('');

  useEffect(() => {
    if (search == "") {
      setSearchResult([...movies, ...series]);
      setCollection([...movies, ...series]);
    } 
    
    else {
      setSearchResult(
        collection.filter(item =>
          item.title.toUpperCase().match(search.toUpperCase())
        )
      );
    }

    // setSearchResult([...movies,...series])
  }, [search])

  return (
    <div className="bg-black p-10">
      <input
        type="search"
        className="w-3/4 m-auto px-4 py-2"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-5">
        {search_result.map((movie,i) => {
          return (
            <div className="col-span-1 p-3" key={i}>
              <img src={movie.image} alt="" />
              <h1>
                <b> {movie.title}</b>
              </h1>

              <h2>{movie.year} </h2>
              <Rating
                value={movie.rating}
                readOnly
                max={5}
                precision={0.25}
              ></Rating>

              {/* <Link to ={`/movies/${movie.id}`}> */}
              <button className="bg-blue-500 hover:bg-blue-300 active:bg-blue-700 w-full py-2 rounded-lg">
                View Details
              </button>
              
              {/* </Link> */}
              {/* </h2> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
