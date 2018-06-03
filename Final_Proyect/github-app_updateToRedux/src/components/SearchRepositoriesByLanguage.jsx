import React from 'react';
import {Link, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import RepositoriesByLanguage from './RepositoriesByLanguage';
import bylanguage from '../images/bylanguage.jpg'
import { handleChange, handleCleanRepositoriesByLanguage } from '../actionCreators'

class SearchRepositoriesByLanguage extends React.Component {

    componentWillUnmount(){
		this.props.handleCleanRepositoriesByLanguage()
	}

    render() {
        return (
            <div className="show-repositories">
                <img src={bylanguage} alt="trending repositories by language"/>
                    <div class="repositories">
                        <form>
                            <select className="form-control" value={this.props.value} onChange={this.props.handleChange} alt="Select choose a language">
                                <option>Select a language</option>
                                <option value="c" alt="c">C</option>
                                <option value="javascript" alt="javascript">Javascript</option>
                                <option value="java" alt="java">Java</option>
                                <option value="php" alt="php">PHP</option>
                                <option value="ruby" alt="ruby">Ruby</option>
                                <option value="scala" alt="scala">Scala</option>
                                <option value="rust" alt="rust">Rust</option>
                                <option value="typescript" alt="typescript">TypeScript</option>
                                <option value="Go" alt="go">Go</option>
                            </select>
                            <Link to={`/search-by-languages/${this.props.value}`}>
                                <button className="btn btn-primary btn-repositories">Search</button>
                            </Link> 
                        </form>
                    </div>
                <Route path="/search-by-languages/:language" component={RepositoriesByLanguage}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = dispatch => {    
    return {
        handleChange(event) {
            let value = event.target.value
            dispatch(handleChange(value))
        }, 
        handleCleanRepositoriesByLanguage(){
            dispatch(handleCleanRepositoriesByLanguage())
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(SearchRepositoriesByLanguage)