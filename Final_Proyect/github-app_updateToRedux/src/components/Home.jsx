import React from 'react'
import {Jumbotron, Grid, Row, Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import github from '../images/exploring_GitHub.png'
import git_repositories from '../images/git_repositories.png'
import languages from '../images/languages.png'
import user from '../images/user.png'


const Home = () => (
    <div>
        <img src={github} alt="logo github"/>
        <Jumbotron className="jumbotron">
            <div className="row clearfix">
                <div className="column half">
                    <h1>Hello, people!</h1>
                    <p>
                        This is a simple application to search for relevant information within github.
                        <br/>I hope you enjoy it!
                    </p>
                </div>
                <div className="column half">
                    <Grid>
                        <Row>
                            <div className="column third">     
                                <Link to="/search-repositories/">
                                    <Thumbnail className="thumbnail" src={git_repositories} alt="Trending repositories">
                                        <code>Trending repositories</code>
                                    </Thumbnail>
                                </Link>
                            </div>
                            <div className="column third">
                                <Link to="/search-by-languages/">
                                    <Thumbnail className="thumbnail" src={languages} alt="Repositories by languages">
                                    <code>Repositories by languages</code>
                                    </Thumbnail>
                                </Link>
                            </div>
                            <div className="column third">
                                <Link to="/search-users/">
                                    <Thumbnail className="thumbnail" src={user} alt="Search users">
                                        <code>Search users</code>
                                    </Thumbnail>
                                </Link>
                            </div>
                        </Row>
                    </Grid>
                </div>
            </div>
        </Jumbotron>
    </div>
)

export default Home