import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Well, Glyphicon, Grid, Row} from 'react-bootstrap'
import loading from '../images/loading.gif'
import { handleRepositorieByLanguage, handleFetching } from '../actionCreators'

class RepositoriesByLanguage extends React.Component {

    componentDidMount() {
        this.props.handleRepositorieByLanguage(this.props.match.params.language);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.language !== this.props.match.params.language) {
            this.props.handleRepositorieByLanguage(this.props.match.params.language);
        }
    }

    render() {

        if (this.props.isFetching === true) {
            return (
                <p className="gif">
                    <img src={loading} alt="loading" />
                </p> 
            )
        }

        const trenRepoByLanguage = this.props.repoByLanguage

        return (
            <div class="show-repositories">
                <Grid>
                    <Row>
                        {
                            trenRepoByLanguage.map((repo) => (
                                <div class="column half">
                                    <Well class="well">
                                        <div class="column third">
                                            <img src={repo.owner.avatar_url} alt='repo avatar'/>
                                        </div>
                                        <div class="column two-thirds">
                                            <strong>
                                                <Link to={`/repositorie-details/${repo.owner.login}/${repo.name}`}>
                                                    <h4 alt={repo.full_name} >
                                                        {repo.full_name}
                                                    </h4>
                                                </Link>
                                            </strong>
                                            <br/><small>{repo.description}</small>
                                            <br/>
                                            <br/>
                                            <Glyphicon glyph="star"/>{` ${repo.watchers} `}  
                                            <Glyphicon glyph="random"/>{` ${repo.forks} `}  
                                            <Glyphicon glyph="record"/>{` ${repo.language} `}
                                        </div>
                                    </Well>   
                                </div>
                            ))
                        }
                    </Row>
                </Grid> 
            </div>   
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        repoByLanguage: state.repoByLanguage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleRepositorieByLanguage(repoByLanguage) {
            dispatch(handleFetching())
            dispatch(handleRepositorieByLanguage(repoByLanguage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesByLanguage);