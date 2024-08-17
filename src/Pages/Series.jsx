import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APIKEY } from "../config";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const Series = () => {
  let series = useSelector((store) => store.seriesStore.series);

  return (
    <>
      <h1>Series</h1>
      <div className="grid grid-cols-4">
        {series.map((serie) => {
          return <div className="col-span-1 p-3">
              <img src={serie.image} alt="" />
              <h1 className="text-center">{serie.title}</h1>
              <h2>Released year: {serie.year}  
              <Rating value={serie.rating} readOnly max={5} precision={0.25}></Rating>            
              </h2>
            </div>
        })
        }
        
      </div>
      <h1><Link to='/series'>Show More</Link></h1>
    </>
  )
}

export default Series;
