import React from 'react';
import Header from './Header'
import MoviesAddForm from './MoviesAddForm';
import MoviesList from './MoviesList';
import { handleOnAddMovies, handleOnEditMovie, handleChange, handleOnShowMovie, handleOnDeleteMovies, resetMovies, resetEditMovie } from '../actionCreators'
import { connect } from 'react-redux';

 const App = (props) => {   

    return (
        <div className="container">
            <Header />
            <MoviesAddForm className="row clearfix"
                onAddMovies={props.handleOnAddMovies}
                onEditMovies={props.handleOnEditMovie} 
                editMovie={props.editMovie} 
                handleChange={props.handleChange}
                resetMovies={props.resetMovies}
                resetEditMovie={props.resetEditMovie}
            />           
            <MoviesList 
                movies={props.movies} 
                onShowMovie={props.handleOnShowMovie} 
                onDeleteMovies={props.handleOnDeleteMovies}
            />
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        editMovie: state.editMovie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(event) {
            dispatch(handleChange(event));
        },    
        handleOnAddMovies(event) {   
            dispatch(handleOnAddMovies(event));  
        },    
        handleOnShowMovie(event) {
            dispatch(handleOnShowMovie(event));
        },    
        handleOnEditMovie(event) {
            dispatch(handleOnEditMovie(event));
            dispatch(resetEditMovie());
        },    
        handleOnDeleteMovies(event) {
            dispatch(handleOnDeleteMovies(event))
            dispatch(resetEditMovie());
        },    
        resetMovies() {
            dispatch(resetMovies());
        },    
        resetEditMovie() {
            dispatch(resetEditMovie());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);