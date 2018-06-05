import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import MoviesAddForm from './MoviesAddForm';
import MoviesList from './MoviesList';

class App extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            movies: [],
            editMovie: []
        };

        this.handleOnAddMovies = this.handleOnAddMovies.bind(this);
        this.handleOnEditMovies = this.handleOnEditMovies.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
        this.handleOnDeleteMovies = this.handleOnDeleteMovies.bind(this);
        this.resetData = this.resetData.bind(this);
        this.add = this.add.bind(this);

    }

    handleOnAddMovies(event) {
        event.preventDefault();

        let form = event.target,
            movie = {
                title: (form.title.value) ? form.title.value : App.defaultProps.title,
                year: (form.year.value) ? form.year.value : App.defaultProps.year,
                duration: (form.duration.value) ? form.duration.value : App.defaultProps.duration
        }

        this.setState({
            movies: this.state.movies.concat([movie])
        })

        if (this.state.editMovie.length) {
            let indexMovie = this.state.editMovie[0].key
    
            let editMovie = {
                title: form.title.value,
                year: form.year.value,
                duration: form.duration.value
            }
            
            this.updateMovie(indexMovie, editMovie);
        }
        form.reset();
    }

    handleChange(event) {
        
        if (event.target.name === 'title') {
            
            let change = this.state.editMovie
            change[0].title = event.target.value
            // this.state.editMovie[0].title = event.target.value
            this.setState({
                editMovie: change
            })
        } 
        if (event.target.name === 'year') {

            let change = this.state.editMovie
            change[0].year = event.target.value
            //this.state.editMovie[0].year = event.target.value
            this.setState({
                editMovie: change
            })
        } 
        if (event.target.name === 'duration') {

            let change = this.state.editMovie
            change[0].duration = event.target.value
            //this.state.editMovie[0].duration = event.target.value
            this.setState({
                editMovie: change
            })
        }
    }

    handleOnEditMovies(event) {
        event.preventDefault();

        let form = event.target.value.split(',');
        const movie = [{
            "key": form[0],
            "title": form[1],
            "year": form[2],
            "duration": form[3]
        }];

        this.setState({
            editMovie: movie
        })
    }

    updateMovie(position, value) {

        let editMovie = this.state.movies
        editMovie.splice(position, 1, value)

        this.setState({
            movies: editMovie
        })
    }

    handleOnDeleteMovies(event) {
        event.preventDefault();
        let form = event.target.value.split(',');
        const movie = [{
            "key": form[0],
            "title": form[1],
            "year": form[2],
            "duration": form[3]
        }];

        let deleteMovie = this.state.movies
        deleteMovie.splice(movie[0].key, 1)

        this.setState({
            movie: deleteMovie
        })

        this.setState({ 
            editMovie: []
        })
    }

    resetData() {
        this.setState({ 
            movies: []
        })
    }

    add() {
        this.setState({ 
            editMovie: []
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <MoviesAddForm className="row clearfix"
                    onAddMovies={this.handleOnAddMovies} 
                    movies={this.state.editMovie} 
                    onEditMovies={this.handleChange}
                    onReset={this.resetData}
                    onAdd={this.add}
                />
                <MoviesList 
                    movies={this.state.movies} 
                    onEditMovies={this.handleOnEditMovies} 
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