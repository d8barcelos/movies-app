import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsWallet2,
  BsHourglassSplit,
  BsFillCalendarDateFill,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/movieCard"
import './movie.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "usd",
    })
  } 

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [id])

  return (
    <div className="movie-page">
      {movie && <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2 /> Budget
            <p>{formatCurrency(movie.budget)}</p>
          </h3>
        </div>
        <div className="info">
          <h3>
            <BsFillCalendarDateFill /> Release date
            <p>{movie.release_date}</p>
          </h3>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit /> Duration
            <p>{movie.runtime} minutes</p>
          </h3>
        </div>
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill /> Overview
            <p>{movie.overview}</p>
          </h3>
        </div>
      </>}
    </div>
  )
}

export default Movie;