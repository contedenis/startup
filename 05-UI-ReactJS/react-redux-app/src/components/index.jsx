import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import MoviesAddForm from './MoviesAddForm';
import MoviesList from './MoviesList';
import store from '../store';
import { handleOnAddMovies, handleOnEditMovie, handleChange, handleOnShowMovie, handleOnDeleteMovies, resetMovies, resetEditMovie } from '../actionCreators'


class App extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            movies: [],
            editMovie: []
        };

        store.subscribe(() => {
            this.setState({
                movies: store.getState().movies,
                editMovie: store.getState().editMovie
            })   
        })

        this.handleChange = this.handleChange.bind(this);
        this.handleOnAddMovies = this.handleOnAddMovies.bind(this);
        this.handleOnEditMovie = this.handleOnEditMovie.bind(this);
        this.handleOnShowMovie = this.handleOnShowMovie.bind(this);
        this.handleOnDeleteMovies = this.handleOnDeleteMovies.bind(this);
        this.resetMovies = this.resetMovies.bind(this);
        this.resetEditMovie = this.resetEditMovie.bind(this);

    }

    handleChange(event) {
        store.dispatch(handleChange(event));
    }    
    handleOnAddMovies(event) {   
        store.dispatch(handleOnAddMovies(event));  
    }  
    handleOnShowMovie(event) {
        store.dispatch(handleOnShowMovie(event));
    }    
    handleOnEditMovie(event) {
        store.dispatch(handleOnEditMovie(event));
        store.dispatch(resetEditMovie());
    }    
    handleOnDeleteMovies(event) {
        store.dispatch(handleOnDeleteMovies(event))
        store.dispatch(resetEditMovie());
    }    
    resetMovies() {
        store.dispatch(resetMovies());
    }    
    resetEditMovie() {
        store.dispatch(resetEditMovie());
    }

    render() {
        return (
            <div className="container">
                <Header />
                <MoviesAddForm className="row clearfix"
                    onAddMovies={this.handleOnAddMovies}
                    onEditMovies={this.handleOnEditMovie} 
                    editMovie={this.state.editMovie} 
                    handleChange={this.handleChange}
                    resetMovies={this.resetMovies}
                    resetEditMovie={this.resetEditMovie}
                />
                <MoviesList 
                    movies={this.state.movies} 
                    onShowMovie={this.handleOnShowMovie} 
                    onDeleteMovies={this.handleOnDeleteMovies}
                />
            </div>
        )
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
};

App.defaultProps = {
    title: 'Movie default',
    year: 0,
    duration: 0
};

export default App;