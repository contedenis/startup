export const handleFetching = () => {
    return {
        type: 'FETCHING_REQUEST',
        fetchValue: true
    }
}

//Trending repositories
export const handleOnTrendingRepositories = () => {
    return dispatch => {
        const url = 'https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&per_page=10'
        fetch(url)
            .then( res =>  res.json() )
            .then( data => data.items )
            .then( trending => dispatch( loadTrending(trending) ))
    }
}

const loadTrending = trending => {
        return {
            type: 'TRENDING_REPOSITORIES',
            trending
        }
}

// //Repositories details
export const handleOnRepositoreDetails = (username, reponame) => {
    return dispatch => {
        const url = `https://api.github.com/repos/${username}/${reponame}`
        fetch(url)
            .then( res => res.json() )
            .then( data => data )
            .then( repoDetails => dispatch( loadRepoDetails(repoDetails) ))
    }
}

const loadRepoDetails = repoDetails => {
        return {
            type: 'REPOSITORIES_DETAILS',
            repoDetails
        }
} 

// Repositories by language
 export const handleChange = value => {
    return {
        type: 'ON_CHANGE',
        value
    }
 }

 // Search repositorie by languange

 export const handleRepositorieByLanguage = repoByLanguage => {
    return dispatch => {
        const url = `https://api.github.com/search/repositories?q=language:${repoByLanguage}&sort=stars&order=desc&per_page=10`
        fetch(url)
            .then( res => res.json() )
            .then( data => data.items )
            .then( repositories => dispatch( loadRepoByLanguage(repositories)) )
    }
 }

 const loadRepoByLanguage = repositories => {
    return {
        type: 'REPOSITORIES_BY_LANGUAGE',
        repositories
    }
} 

 // On change name
 export const handleNameChange = value => {
    return {
        type: 'ON_CHANGE_USERNAME',
        value
    }
 }

 // Search users - List
export const handleSearchUsers = userToFind => {
    return dispatch => {
        const url = `https://api.github.com/search/users?q=${userToFind}`
        fetch(url)
            .then( res => res.json() )
            .then( data => data.items )
            .then( usersList => dispatch( loadUsersList(usersList)) )
    }
}

const loadUsersList = (usersList) => {
        return {
            type: 'USERS_LIST',
            usersList
        }
} 

 // Users details
 export const handleUserDetails = user => {
    return dispatch => {
        const url = `https://api.github.com/users/${user}`
        fetch(url)
            .then( res => res.json() )
            .then( data => data )
            .then( userDetails => dispatch( loadUserDetails(userDetails)) )
    }
}

const loadUserDetails = userDetails => {
        return {
            type: 'USER_DETAILS',
            userDetails
        }
} 

// Users public repos
export const handleUserRepos = user => {
    return dispatch => {
        const url = `https://api.github.com/users/${user}/repos`
        fetch(url)
            .then( res => res.json() )
            .then( data => data )
            .then( userRepos => dispatch( loadUserRepos(userRepos)) )
    }
}

const loadUserRepos = userRepos => {
        return {
            type: 'USER_REPOS',
            userRepos
        }
} 

export const handleCleanSearch = () => {
    return {
        type: 'CLEAN_SEARCH',
        value: ''
    }
}

export const handleCleanUserDetails = () => {
    return {
        type: 'CLEAN_DETAILS',
        value: ''
    }
}

export const handleCleanRepositoriesByLanguage = () => {
    return {
        type: 'CLEAN_SEARCH_BY_LANGUAGE',
        value: ''
    }   
}

export const handleCleanRepoDetails = () => {
    return {
        type: 'CLEAN_REPO_DETAILS',
        value: ''
    }  
}

