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

        this.handleOnAddMovies = this.handleOnAddMovies.bind(this);
        this.handleOnShowMovie = this.handleOnShowMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOnDeleteMovies = this.handleOnDeleteMovies.bind(this);
        this.resetMovies = this.resetMovies.bind(this);
        this.resetEditMovie = this.resetEditMovie.bind(this);

    }

    handleOnAddMovies(event) {   
        if (this.state.editMovie.length) {
            store.dispatch(handleOnEditMovie(event));
            this.resetEditMovie();
        } else {
            store.dispatch(handleOnAddMovies(event));
        }    
    }

    handleChange(event) {
        store.dispatch(handleChange(event));
    }

    handleOnShowMovie(event) {
        store.dispatch(handleOnShowMovie(event));
    }

    handleOnDeleteMovies(event) {
        store.dispatch(handleOnDeleteMovies(event))
        this.resetEditMovie();
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
                    editMovies={this.state.editMovie} 
                    onEditMovies={this.handleChange}
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