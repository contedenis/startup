import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    trendingRepositories: [],
    repositorieDetails: [],
    repoByLanguage: [],
    userRepos: [],
    userDetails: [],
    usersList: [],
    username: '',
    value: '',
    isFetching: false
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'TRENDING_REPOSITORIES':
            return {
                ...state,
                trendingRepositories: action.trending,
                isFetching: false
            }
        
        case 'REPOSITORIES_DETAILS':
            return {
                ...state,
                repositorieDetails: action.repoDetails,
                isFetching: false
            }

        case 'REPOSITORIES_BY_LANGUAGE':
            return {
                ...state,
                repoByLanguage: action.repositories,
                isFetching: false
            }

        case 'USERS_LIST':
            return {
                ...state,
                usersList: action.usersList,
                isFetching: false
            }

        case 'USER_DETAILS':
            return {
                ...state,
                userDetails: action.userDetails
            }

        case 'USER_REPOS':
            return {
                ...state,
                userRepos: action.userRepos
            }

        case 'FETCHING_REQUEST':
            return {
                ...state,
                isFetching: action.fetchValue
            }

        case 'ON_CHANGE':
            return {
                ...state,
                value: action.value
            }

        case 'ON_CHANGE_USERNAME':
            return {
                ...state,
                username: action.value
            }

        case 'CLEAN_SEARCH':
            return {
                ...state,
                username: action.value
            }

        case 'CLEAN_DETAILS':
            return {
                ...state,
                userDetails: action.value
            }

        case 'CLEAN_SEARCH_BY_LANGUAGE':
            return {
                ...state,
                value: action.value
            }

        case 'CLEAN_REPO_DETAILS':
            return {
                ...state,
                repositorieDetails: action.value
            }

        default:
            return state
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore (
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store