import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import movieCard from "../components/movieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MovieGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")
  return (
    <div className="container">
        <h2 className="title">Results for: <span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <movieCard key={movie.id} movie={movie}/>)}
        </div>
      </div>
  )
}

export default Search