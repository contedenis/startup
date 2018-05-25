import App from './components/';

const handleOnAddMovies = event => {
    event.preventDefault();
    let form = event.target,
        movie = {
            title: (form.title.value) ? form.title.value : App.defaultProps.title,
            year: (form.year.value) ? form.year.value : App.defaultProps.year,
            duration: (form.duration.value) ? form.duration.value : App.defaultProps.duration
        }
        form.reset();
    return {
        type: "ADD_TO_MOVIE",
        movie
    };
};

const handleOnEditMovie = event => {
    event.preventDefault();
    let form = event.target,
        movie = {
            title: form.title.value,
            year: form.year.value,
            duration: form.duration.value
        }
        
    return {
        type: "EDIT_MOVIE",
        movie
    };
};

const handleChange = event => {
    let eventValue = [event.target.name, event.target.value]
    return {
        type: "ON_CHANGE",
        eventValue
    };
};

const handleOnShowMovie = event => {  
    event.preventDefault();
    let form = event.target.value.split(',');
        const movie = [{
            "key": form[0],
            "title": form[1],
            "year": form[2],
            "duration": form[3]
        }];

    return {
        type: "SHOW_MOVIE_TO_EDIT",
        movie
    }
}

const handleOnDeleteMovies = event => {
    event.preventDefault();
    let form = event.target.value.split(',');
    const movie = [{
        "key": form[0],
        "title": form[1],
        "year": form[2],
        "duration": form[3]
    }];

    return {
        type: "REMOVE_FROM_MOVIES",
        movie
    }
}

const resetMovies = () => {
    return {
        type: "RESET_MOVIES"
    }
}

const resetEditMovie = () => {
    return {
        type: "RESET_EDIT_MOVIE"
    }
}

export { handleOnAddMovies, handleOnEditMovie, handleChange, handleOnShowMovie, handleOnDeleteMovies, resetMovies, resetEditMovie };