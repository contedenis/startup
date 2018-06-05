import { createStore, applyMiddleware, combineReducers } from 'redux';

const movies = (state = [], action) => {

    if (action.type === 'ADD_TO_MOVIE') {

        return state.concat([action.movie]);

    } else if (action.type === 'REMOVE_FROM_MOVIES') {

        return state.filter((movie, index) => index !== Number(action.movie[0].key))

    } else if (action.type === "EDIT_MOVIE") {

        let change = Object.assign([{}], state);
        change.splice(state[0].key, 1, action.movie) 

        return change 

    } else if (action.type === "RESET_MOVIES") {

        return []

    } 

    return state;
}

const editMovie = (state = [], action) => {

    if (action.type === "SHOW_MOVIE_TO_EDIT") { 

        return action.movie

    } else if (action.type === "ON_CHANGE") {

        if (action.eventValue[0] === 'title') {

            let change = Object.assign([], state);
            change[0].title = action.eventValue[1]

            return change

        } else if (action.eventValue[0] === 'year') {

            let change = Object.assign([], state);
            change[0].year = action.eventValue[1]

            return change

        } else if (action.eventValue[0] === 'duration') {

            let change = Object.assign([], state);
            change[0].duration = action.eventValue[1]

            return change

        }
    } else if (action.type === "RESET_EDIT_MOVIE") {

        return []

    }
    return state;
}

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

export default createStore(combineReducers({ movies, editMovie }), applyMiddleware(logger));
