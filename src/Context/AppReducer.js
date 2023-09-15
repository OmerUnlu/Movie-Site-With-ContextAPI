const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD_MOVİE_TO_WATCHLİST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload]
            };
        case "DELETE_THE_MOVİE":
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.id !== action.payload)
            };
        case "ADD_MOVİE_TO_WATCHLİED":
            return {
                    ...state,
                    watched: [...state.watched, action.payload]
                };    
        case "DELETE_THE_MOVİE_Watched":
            return {
                        ...state,
                        watched: state.watched.filter((movie) => movie.id !== action.payload)
                    };
        case "CHANGE_WATCHLİST_TO_WATCHED":
            return {
                  ...state,
                   watched: [...state.watched, action.payload],
                   watchList: state.watchList.filter((movie) => movie.id !== action.payload.id)
                        };
        case "CHANGE_WATCHED_TO_WATCHLİST":
            return {
                    ...state,
                    watchList: [...state.watchList, action.payload],
                    watched: state.watched.filter((movie) => movie.id !== action.payload.id)
                    };
        default:
            return state;    
    }
}; 

export default AppReducer;