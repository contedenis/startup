import React from 'react';
import {Link, Route} from 'react-router-dom'
import RepositoriesByLanguage from './RepositoriesByLanguage';
import bylanguage from '../images/bylanguage.jpg'


class SearchRepositoriesByLanguage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            value: ''
        };

    this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="show-repositories">
                <img src={bylanguage} alt="trending repositories by language"/>
                    <div class="repositories">
                        <form onSubmit={this.handleSubmit}>
                            <select className="form-control" value={this.state.value} onChange={this.handleChange} alt="Select choose a language">
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
                            <Link to={`/search-by-languages/${this.state.value}`}>
                                <button className="btn btn-primary btn-repositories">Search</button>
                            </Link> 
                        </form>
                    </div>
                <Route path="/search-by-languages/:language" component={RepositoriesByLanguage}/>
            </div>
        )
    }
}
    
export default SearchRepositoriesByLanguage;