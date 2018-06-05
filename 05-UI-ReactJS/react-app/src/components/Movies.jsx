import React from 'react';

const Movies = (props) => (
    <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td>{props.duration}</td>
        <td>
            <button className="btn btn-outline-primary btn-sm mr-1" onClick={props.onEditMovies} value={props.value}>Edit</button>
            <button className="btn btn-outline-primary btn-sm" onClick={props.onDeleteMovies}>Delete</button>
        </td>
    </tr>   
)

export default Movies;