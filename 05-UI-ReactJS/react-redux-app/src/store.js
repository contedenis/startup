import { createStore } from 'redux';

const reducer = (state, action) => {

    if (action.type === 'ADD_TO_MOVIE') {
        return {
            ...state,
            movies: state.movies.concat([action.movie])
        };
    } else if (action.type === 'REMOVE_FROM_MOVIES') {
        return {
            ...state,
            movies: state.movies.filter((movie, index) => index != action.movie[0].key)  
        }
    } else if (action.type === "SHOW_MOVIE_TO_EDIT") {
        return {
            ...state,
            editMovie: action.movie
        }
    } else if (action.type === "EDIT_MOVIE") {
        return {
            ...state,
            movie: state.movies.splice(state.editMovie[0].key, 1, action.movie)
        }
    } else if (action.type === "ON_CHANGE") {
        let change = state.editMovie
        switch (action.eventValue[0]) {
            case 'title':
                change[0].title = action.eventValue[1]
                return {
                    ...state,
                    editMovie: change
                }
            case 'year':
                change[0].year = action.eventValue[1]
                return {
                    ...state,
                    editMovie: change
                }
            case 'duration':
                change[0].duration = action.eventValue[1]
                return {
                    ...state,
                    editMovie: change
                }
        }       
    } else if (action.type === "RESET_MOVIES") {
        return {
            ...state,
            movies: []
        }
    } else if (action.type === "RESET_EDIT_MOVIE") {
        return {
            ...state,
            editMovie: []
        }
    }
    return state;
}

export default createStore(reducer, { movies: [], editMovie: [] });
