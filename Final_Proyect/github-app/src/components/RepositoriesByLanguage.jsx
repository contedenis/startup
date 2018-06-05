import React from 'react'
import {Link} from 'react-router-dom'
import { Well, Glyphicon, Grid, Row} from 'react-bootstrap'
import loading from '../images/loading.gif'

class RepositoriesByLanguage extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
            getRepositorie: false,
            repoByLanguage: [],
        };

        this.handleRepositorieByLanguage = this.handleRepositorieByLanguage.bind(this);

    }

    handleRepositorieByLanguage() {

        this.setState({
            getRepositorie: true
        })

        let getLanguage = this.props.match.params.language
    
        const config = {
          'method': 'GET',
          'url': `https://api.github.com/search/repositories?q=language:${getLanguage}&sort=stars&order=desc&per_page=10`
        }
      
        fetch(config.url)
            .then( (res) => {
                return res.json();
            })
            .then( (data) => {
                let language = data.items
                return language
            })
            .then( (language) => {
                this.setState({
                    getRepositorie: false,
                    repoByLanguage: language
                })
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.handleRepositorieByLanguage();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.language !== this.props.match.params.language) {
            this.handleRepositorieByLanguage();
        }
    }

    render() {

        if (this.state.getDate === true) {
            return (
                <p className="gif">
                    <img src={loading} alt="loading" />
                </p> 
            )
        }

        const trenRepoByLanguage = this.state.repoByLanguage

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

export default RepositoriesByLanguage;