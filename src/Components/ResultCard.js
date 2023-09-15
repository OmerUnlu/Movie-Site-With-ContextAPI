import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const ResultCard = ({movie}) => {

    const {addMovieToWatchlist} = useContext(GlobalContext);
    const {addMovieToWatched} = useContext(GlobalContext)

  return (
    <>
        <div className="cardContainer">
            <div className="cardImg item1">
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}alt={`${movie.poster_path}`} />
            </div>
            <div className="cardContent item2">
                <h2>{movie.title}</h2>
                <p> {movie.release_date ? movie.release_date.substring(0, 4) : "-"}</p>
                <p >IMDB:  <b>{movie.vote_average ? movie.vote_average : "-"}</b></p>
            </div>
            <div className='cardButtons item3'>
                <button  onClick={() => addMovieToWatchlist(movie)} >ADD TO WATCHLİST</button>
                <button  onClick={() => addMovieToWatched(movie)}>ADD TO WATCHED</button>
            </div>
        </div>
    </>
  )
}

export default ResultCard