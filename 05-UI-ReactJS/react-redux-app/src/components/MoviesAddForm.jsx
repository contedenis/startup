import React from 'react';
import FormMovie from './FormMovie';
import EditFormMovie from './EditFormMovie';

const MoviesAddForm = (props) => (
    <div className="col-lg-6 column halft">
        {props.editMovie.length ? (
            <form className="form" onSubmit={props.onEditMovies} >
                {
                    props.editMovie.map((movie, key) => (
                        <EditFormMovie  
                            handleChange={props.handleChange}
                            key={key}
                            title={movie.title}
                            year={movie.year}
                            duration={movie.duration}
                            resetMovies={props.resetMovies}
                            resetEditMovie={props.resetEditMovie}  
                        />
                    )) 
                }   
            </form> 
        ) : (
            <form className="form" onSubmit={props.onAddMovies} >
                <FormMovie 
                    onDeleteMovies={props.onDeleteMovies}
                    resetMovies={props.resetMovies}
                    resetEditMovie={props.resetEditMovie} 
                />
            </form>
        )}
    </div>
)

export default MoviesAddForm;