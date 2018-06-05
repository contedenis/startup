import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Well } from 'react-bootstrap'
import { connect } from 'react-redux'
import userdetails from '../images/user_details.jpg'
import UserRepos from './UserRepos'
import { handleUserDetails, handleCleanUserDetails } from '../actionCreators'


class UserDetails extends React.Component {

    componentDidMount() {
        this.props.handleUserDetails(this.props.match.params.username, this.props.match.params.reponame);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username) {
            this.props.handleUserDetails(this.props.match.params.username)
        }
    }

    componentWillUnmount() {
		this.props.handleCleanUserDetails()
	}

    render() {
        
        const user = this.props.match.params.username
        const detailsToShow = this.props.userDetails
        
        return (
            <div className="show_repositorie_details">
                <img src={userdetails} alt="logo user details" />
                    <Well className="column well_details">
                        <div className="column well_image_details">
                            <img src={detailsToShow.avatar_url} alt="user avatar" />
                            <br/>
                        </div>
                        <div className="column well_body_details">
                            <strong alt={`user name ${detailsToShow.name}`}><h2>{detailsToShow.name}</h2></strong>
                            <br/>
                            <small alt={`user bio ${detailsToShow.bio}`}>{detailsToShow.bio}</small>
                            <br/>
                            <br/>
                            <strong alt={`created user ${detailsToShow.created_at}`}>Created: </strong>
                            <small>{detailsToShow.created_at}</small>
                            <br/>
                            <strong alt={`user last updated ${detailsToShow.updated_at}`}>Last updated: </strong> 
                            <small>{detailsToShow.updated_at}</small>
                            <br/>
                            <br/>
                            <a href={detailsToShow.blog} alt="link to user blog">Blog</a>
                            <br/><a href={detailsToShow.html_url} alt="link to github user">Official github repositorie</a>
                            <br/>
                                <Link to={`/user-details/${user}/repos`}>
                                    <a alt="show publics user repositories">Public repositories</a>
                                </Link>
                            <br/>
                            <Route component={UserRepos} path={`/user-details/:username/repos`} />
                        </div>
                    </Well>   
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		userDetails: state.userDetails
	}
}

const mapDispatchToProps = dispatch => {    
	return {
		handleUserDetails(user) {
			dispatch(handleUserDetails(user))
        },
        handleCleanUserDetails() {
            dispatch(handleCleanUserDetails())
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);