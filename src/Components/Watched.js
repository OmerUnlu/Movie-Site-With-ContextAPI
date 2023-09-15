import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Watched = () => {

  const { watched} = useContext(GlobalContext)
  const {removeMOvieFromWatched} = useContext(GlobalContext)
  const {chancingWhated} = useContext(GlobalContext)

  return (
    <>
      <div className="Watchlistcontainer">
              <div className="listTop">
                <h2>Watched</h2>
                <div className="listHowMany">{`${watched.length} MOVİES`}</div>
              </div>
              <div className="listWatching">
        {watched.map((addWatchlist, index) => {
          return (
                <div className="listMovies"  key={index}>
                  <img src={`https://image.tmdb.org/t/p/w200/${addWatchlist.poster_path}`} alt={`${addWatchlist.poster_path}`} />
                  <p className="listRaiting">{addWatchlist.vote_average ? addWatchlist.vote_average.toFixed(1) : "-"}</p>
               
                  <button onClick={() => chancingWhated(addWatchlist)} className='firtBtn addhover'><i className="fa-fw far fa-eye-slash"></i></button>
                  <button onClick={() =>removeMOvieFromWatched(addWatchlist.id)} className='watchlistBtn addhover'><i className="fa-solid fa-x"></i></button>
                </div>
          )
        })}
          </div>
      </div>
    </>
  )
}

export default Watched