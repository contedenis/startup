import React from 'react';

const EditFormMovie = (props) => (
    <div className="input-group">    
        <input 
        	className="form-control" 
	        type="text" 
	        value={props.title} 
	        onChange={props.onEditMovies} 
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
        	value={props.year} 
        	onChange={props.onEditMovies} 
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
    		value={props.duration} 
    		onChange={props.onEditMovies} 
    		pattern="^([0-9])*$" 
    		title="Numbers only, please" 
    		name="duration" 
    		minLength="2" 
    		maxLength="4" 
    		required
        />
        <div className="col-lg-12 column full">
            <button className="btn mt-4 mr-1" type="submit">Save</button >
            <button className="btn mt-4 mr-1" onClick={props.onReset}>Reset</button >
            <button className="btn mt-4 mr-1" onClick={props.onAdd}>Add</button >
        </div>
    </div>
)

export default EditFormMovie;