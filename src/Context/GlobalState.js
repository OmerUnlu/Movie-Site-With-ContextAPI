import { createContext,useEffect,useReducer} from "react";
import AppReducer from './AppReducer'

//! create context
export const GlobalContext = createContext();

const initialState = {
    watchList : localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")): [],
    watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")): [],
}

//! provider components
export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer,initialState)

    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVİE_TO_WATCHLİST", payload: movie})
    }

    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVİE_TO_WATCHLİED", payload: movie})
    }

    const removeMOvieFromWatchlist = (id) =>{
        dispatch({type: "DELETE_THE_MOVİE", payload: id})
    }

    const removeMOvieFromWatched = (id) =>{
        dispatch({type: "DELETE_THE_MOVİE_Watched", payload: id})
    }

    const chancingWhatList = (movie) =>{
        dispatch({type: "CHANGE_WATCHLİST_TO_WATCHED", payload:movie})
    }

    const chancingWhated = (movie) =>{
        dispatch({type: "CHANGE_WATCHED_TO_WATCHLİST", payload:movie})
    }

    useEffect(() => {
            localStorage.setItem("watchList", JSON.stringify(state.watchList));
            localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state])
    

  return (
    <GlobalContext.Provider
      value={{
        chancingWhated,
        chancingWhatList,
        addMovieToWatched,
        addMovieToWatchlist,
        removeMOvieFromWatchlist,
        removeMOvieFromWatched,
        watchList: state.watchList,
        watched: state.watched
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};