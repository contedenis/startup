import React from 'react';

const Movies = (props) => (
    <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td>{props.duration}</td>
        <td>
            <button className="btn btn-outline-primary btn-sm mr-1" onClick={props.onShowMovie} value={props.value}>Edit</button>
            <button className="btn btn-outline-primary btn-sm" onClick={props.onDeleteMovies} value={props.value}>Delete</button>
        </td>
    </tr>   
)

export default Movies;