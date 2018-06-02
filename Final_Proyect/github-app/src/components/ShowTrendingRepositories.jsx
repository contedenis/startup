import React from 'react'
import {Link} from 'react-router-dom'
import { Well, Glyphicon, Grid, Row } from 'react-bootstrap'
import top10repositories from '../images/top10repositories.jpg'
import loading from '../images/loading.gif'

class ShowTrendingRepositories extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
            getDate: false,
            trendingRepositories: [],
        };

        this.handleOnTrendingRepositories = this.handleOnTrendingRepositories.bind(this);

    }

    handleOnTrendingRepositories() {

        this.setState({
            getDate: true
        })

        const config = {
            'method': 'GET',
            'url': `https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&per_page=10`
        }

        fetch(config.url)
            .then( (res) => {
                return res.json();
            })
            .then( (data) => {
                let trending = data.items;
                return trending
            })
            .then( (trending) => {
                this.setState({
                    getDate: false,
                    trendingRepositories: trending
                })
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.handleOnTrendingRepositories();
    }

    render() {

        if (this.state.getDate === true) {
            return (
                <p className="gif">
                    <img src={loading} alt="loading"/>
                </p> 
            )
        }

        const trendRepositories = this.state.trendingRepositories

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

export default ShowTrendingRepositories;