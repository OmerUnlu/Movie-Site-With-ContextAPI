import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const WatchList = () => {
  const { watchList } = useContext(GlobalContext)
  const {removeMOvieFromWatchlist} = useContext(GlobalContext)
  const {chancingWhatList} = useContext(GlobalContext)
  return (
    <>
      <div className="Watchlistcontainer">
              <div className="listTop">
                <h2>Watchlist</h2>
                <div className="listHowMany">{`${watchList.length} MOVİES`}</div>
              </div>
              <div className="listWatching">
        {watchList.map((addWatchlist, index) => {
          return (
                <div className="listMovies"  key={index}>
                  <img src={`https://image.tmdb.org/t/p/w200/${addWatchlist.poster_path}`} alt={`${addWatchlist.poster_path}`} />
                  <p className="listRaiting">{addWatchlist.vote_average ? addWatchlist.vote_average.toFixed(1) : "-"}</p>
               
                  <button onClick={() => chancingWhatList(addWatchlist,addWatchlist.id)} className='firtBtn addhover'><i className="fa-fw far fa-eye"></i></button>
                  <button onClick={() => removeMOvieFromWatchlist(addWatchlist.id)} className='watchlistBtn addhover'><i className="fa-solid fa-x"></i></button>
                </div>
          )
        })}
          </div>
      </div>
    </>
  )
}

export default WatchList