import React from 'react'
import { Link } from "react-router-dom"
import searchUser from '../images/searchUser.jpg'

class SearchUser extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			username: '',
		};

		this.handleInputChange = this.handleInputChange.bind(this);

	}
	
		handleInputChange(event) {

			const value = event.target.value;
		
			this.setState({
				username: value
			});

		}
	
		render () {
			return (
				<div className="show-repositories">
					<img src={searchUser} alt="search user"/>
					<div class="repositories">
						<form>
							<input 
								type="text" 
								class="form-control" 
								placeholder="Put the user that you want to search" 
								name="username" value={this.state.username} 
								onChange={this.handleInputChange}
								pattern="^[A-Za-z0-9\s]+$"
								alt='Put the user that you want to search'
								required
							/>
							{ this.state.username ? (
								<Link to={`${this.state.username}`}>
									<button className="btn btn-primary btn-repositories">Search</button>
								</Link>
								) : (
									<button className="btn btn-primary btn-repositories" disabled>Search</button>
								)
							}
						</form>
					</div>
				</div>
			)
		}
	}
	
	export default SearchUser;