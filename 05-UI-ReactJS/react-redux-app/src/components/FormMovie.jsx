import React from 'react';

const FormMovie = (props) => (
    <div className="input-group">
        <input 
            className="form-control" 
            type="text" 
            placeholder="Movie name" 
            name="title" 
            pattern="^[A-Za-z0-9\s]+$" 
            title="Letters only, please" 
            minLength="2" 
            maxLength="30" 
            required
        />
        <input 
            className="form-control"
            type="text"
            placeholder="Year"
            name="year"
            pattern="^([0-9])*$"
            title="Numbers only, please"
            minLength="4"
            maxLength="4"
            required
        />
        <input 
            className="form-control"
            type="text"
            placeholder="Duration"
            name="duration"
            pattern="^([0-9])*$"
            title="Numbers only, please"
            minLength="2"
            maxLength="4"
            required
        />
        <div className="col-lg-12 column full">
            <button className="btn mt-4 mr-1" type="submit">Save</button >
            <button className="btn mt-4 mr-1" onClick={props.resetMovies} >Reset</button >
            <button className="btn mt-4 mr-1" onClick={props.resetEditMovie}>Add</button >
        </div>
    </div>
)

export default FormMovie;