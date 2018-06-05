import React from 'react';
import Movies from './Movies';

const MoviesList = (props) => (
    <div className= "column halft">
        <table className="table table-sm"> 
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Option</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.movies.map((movie, key) => (
                        <Movies
                            value={[key,
                                    movie.title,
                                    movie.year,
                                    movie.duration
                                   ]}
                            onEditMovies={props.onEditMovies}
                            onDeleteMovies={props.onDeleteMovies}
                            key={key}
                            title={movie.title}
                            year={movie.year}
                            duration={movie.duration}
                        />
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default MoviesList;