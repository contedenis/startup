import React from 'react'
import { Link } from 'react-router-dom'
import { Well, Glyphicon, Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import top10repositories from '../images/top10repositories.jpg'
import loading from '../images/loading.gif'
import { handleOnTrendingRepositories, handleFetching } from '../actionCreators'

class ShowTrendingRepositories extends React.Component {
    
    componentDidMount() {
        this.props.handleOnTrendingRepositories();
    }

    render() {

        if (this.props.isFetching === true) {
            return (
                <p className="gif">
                    <img src={loading} alt="loading"/>
                </p> 
            )
        }
        const trendRepositories = this.props.trendingRepositories
        console.log(trendRepositories)
        
        return (
            <div class="show-repositories">
            <img src={top10repositories} alt="top 10 repositories"/>
                <Grid>
                    <Row>
                        {
                            trendRepositories.map((repo) => (
                                <div class="column half">
                                    <Well class="well">
                                        <div class="column third">
                                            <img src={repo.owner.avatar_url} alt="user avatar" />
                                        </div>
                                        <div class="column two-thirds">
                                            <strong>
                                                <Link to={`/repositorie-details/${repo.owner.login}/${repo.name}`}>
                                                    <h4 alt={repo.full_name}>
                                                        {repo.full_name}
                                                    </h4>
                                                </Link>
                                            </strong>
                                            <br/><small alt={`user description ${repo.description}`}>{repo.description}</small>
                                            <br/>
                                            <br/>
                                            <Glyphicon glyph="star" alt={`user watchers ${repo.watchers}`} />{` ${repo.watchers}  `} 
                                            <Glyphicon glyph="random" alt={`user forks ${repo.forks}`}/>{` ${repo.forks} `} 
                                            <Glyphicon glyph="record" alt={`user language ${repo.language}`}/>{` ${repo.language} `} 
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
        trendingRepositories: state.trendingRepositories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnTrendingRepositories() {
            dispatch(handleFetching())
            dispatch(handleOnTrendingRepositories())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrendingRepositories);