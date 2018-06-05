import React from 'react';
import FormMovie from './FormMovie';
import EditFormMovie from './EditFormMovie';

const MoviesAddForm = (props) => (
    <div className="col-lg-6 column halft">
        {props.movies.length ? (
            <form className="form" onSubmit={props.onAddMovies} >
                {
                    props.movies.map((movie, key) => (
                        <EditFormMovie  
                            onEditMovies={props.onEditMovies}
                            key={key}
                            title={movie.title}
                            year={movie.year}
                            duration={movie.duration}
                            onAdd={props.onAdd}
                            onReset={props.onReset}
                        />
                    )) 
                }   
            </form> 
        ) : (
            <form className="form" onSubmit={props.onAddMovies} >
                <FormMovie 
                    onDeleteMovies={props.onDeleteMovies}
                    onAdd={props.onAdd}
                    onReset={props.onReset}
                />
            </form>
        )}
    </div>
)

export default MoviesAddForm;