import React from 'react'
import { Glyphicon, Well } from 'react-bootstrap'
import repositorie from '../images/repositorie.jpg'
import loading from '../images/loading.gif'
import { handleOnRepositoreDetails, handleFetching, handleCleanRepoDetails } from '../actionCreators'
import { connect } from 'react-redux'


class RepositorieDetails extends React.Component {

    componentDidMount() {
        this.props.handleOnRepositoreDetails(this.props.match.params.username, this.props.match.params.reponame);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username) {
            this.props.handleOnRepositoreDetails(this.props.match.params.username, this.props.match.params.reponame);
        }
    }

    componentWillUnmount() {
        this.props.handleCleanRepoDetails()
    }
    
    render() {

        if (this.props.isFetching === true) {
            return (
                <p className="gif">
                    <img src={loading} alt="loading"/>
                </p> 
            )
        }

        const repoDetails = this.props.repositorieDetails

        return (
            <div className="show_repositorie_details">
                <img src={repositorie} alt="logo github"/>
                <Well className="column well_details">
                    <div className="column well_image_details">
                        { repoDetails.owner ? (
                            <img src={repoDetails.owner.avatar_url} alt={`repo avatar ${repoDetails.owner.avatar_url}`} /> 
                            ) : ('')
                        }
                    </div>
                    <div className="column well_body_details">
                        <strong>
                            <h2 alt={`repo full name ${repoDetails.full_name}`} >
                                {repoDetails.full_name}
                            </h2>
                        </strong>
                        <br/>
                        <small alt={`description ${repoDetails.description}`}>
                            {repoDetails.description}
                        </small>
                        <br/>
                        <br/>
                        <strong alt={`repo created ${repoDetails.created_at}`}>
                            Created: 
                        </strong>
                        <small>{repoDetails.created_at}</small>
                        <br/>
                        <strong alt={`repo last updated ${repoDetails.updated_at}`}>
                            Last updated: 
                        </strong> 
                        <small>{repoDetails.updated_at}</small>
                        <br/>
                        <br/>
                        {repoDetails.homepage ? (
                            <a href={repoDetails.homepage} alt={`homepage ${repoDetails.homepage}`}>Homepage</a>
                        ) : ('') }
                        <br/><a href={repoDetails.html_url} alt={`github repositorie ${repoDetails.html_url}`}>Official github repositorie</a>
                        <br/>
                        <br/>
                        <Glyphicon glyph="star" alt={`watchers ${repoDetails.watchers}`} />{` ${repoDetails.watchers} `}
                        <Glyphicon glyph="random" alt={`forks ${repoDetails.forks}`} />{` ${repoDetails.forks} `}
                        <Glyphicon glyph="record" alt={`language ${repoDetails.language}`} />{` ${repoDetails.language} `}
                    </div>
                </Well>
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        repositorieDetails: state.repositorieDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnRepositoreDetails(username, reponame) {
            dispatch(handleFetching())
            dispatch(handleOnRepositoreDetails(username, reponame))
        },
        handleCleanRepoDetails() {
            dispatch(handleCleanRepoDetails())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RepositorieDetails);