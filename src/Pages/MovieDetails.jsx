

import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { APIKEY } from '../config'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from '@mui/material'
import { isLoggedIn } from '../api/api'

const MovieDetails = () => {
    let params = useParams()
    let id = params.id

    let movies=useSelector(store=>store.movieStore.movies)
    let cart_items=useSelector(store=>store.cartStore.cart_items)

    let dispatch = useDispatch();

    let [movie, setMovie] = useState({})

    useEffect(()=>{
        let movieExist = movies.find(mov=>mov.id ===id)

        if(movieExist){
            setMovie(movieExist)
        }

        else{
            alert("Movie not Found")
        }

            // const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
            // const options = {
            //   method: "GET",
            //   headers: {
            //     "x-rapidapi-key": APIKEY,
            //     "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
            //   },
            // };
      
            // fetch(url, options)
            //   .then((response) => response.json())
            //   .then((result) => setMovie(result));
    },[])

    const navigate = useNavigate()

    const handleAddToCart = (e) =>{
        e.preventDefault()
        if(!isLoggedIn()){
            navigate('/login')
        }

        else{
            // console.log("Add to Cart")
            // let movieExist = movies.find(mov=>mov.id===id)
            let itemExist = cart_items.find(item=>item.title==movie.title)
            if(itemExist){
                alert("Movie already in cart.")
            }

            else{
                let cart_item = {title:movie.title,image:movie.image, price:1000}
                dispatch({type:"ADDTOCART",payload:cart_item})
                alert("Movie added to cart.")
            }
        }
    }


    return (
    // <div >
    //   <h1 className='text-center text-3xl mt-3'>{movie.title}</h1>
    //   <div className="flex flex-row  m-auto mt-2 d-f p-11">
    //     <img src={movie.image} className='h-1/6 w-auto' alt="" />
    //     <div className="details ms-7">
    //         <h2 className='text-2xl text-purple-500'>Released year: {movie.year}</h2><br />
    //         <h2 className='text-2xl'>IMDB Rating: {movie.rating}</h2><br />
    //         <h2 className='text-2xl'> Price: {movie.price}</h2>
    //         <button className='bg-blue-500 hover:bg-blue-300 active:bg-blue-700 w-full py-2'>Add to Cart</button>
    //     </div>
    //   </div>
    // </div>

    <div className="w-1/2 my-10 shadow-lg m-auto ">
        <div className="bg-black py-10 text-center text-white text-2xl"><b>{movie.title}</b>  </div>
        <div className="flex">
            <div className="md:w-1/2">
                <img src={movie.image} alt="" className='w-full'/>
            </div>

            <div className="md:w-1/2 p-10 bg-purple-300">
            <h1>Plot</h1>
            <p>{movie.desccription}</p>
            <h1>Released Year: {movie.year}</h1>
            <h1>Rating</h1>
            <Rating value={movie.rating} readOnly max={10}/>

            <h1>Genre:
                <div className="flex justify-evenly flex-wrap genre">
                {
                    movie.genre?.map((tag,i)=>{
                        return <span className='p-2 bg-gray-500 rounded-lg' key={i} >{tag}</span>
                    })
                }
                </div>
            </h1>

            <button className='bg-blue-600 rounded-lg hover:bg-blue-200 active:bg-blue-700 px-4 py-3 mt-3' onClick={handleAddToCart}>Add to cart</button>
            </div>
            
        </div>
    </div>
  )
}

export default MovieDetails
