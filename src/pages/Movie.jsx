import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
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

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [id])

  return (
    <div>
    {movie && <>
      <MovieCard movie={movie} />
    </>}
    </div>
  )
}

export default Movie;