import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import searchUser from '../images/searchUser.jpg'
import { handleNameChange, handleCleanSearch } from '../actionCreators'

class SearchUser extends React.Component {

	componentWillUnmount() {
		this.props.handleCleanSearch()
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
							name="username" value={this.props.username} 
							onChange={this.props.handleNameChange}
							pattern="^[A-Za-z0-9\s]+$"
							alt='Put the user that you want to search'
							required
						/>
						{ this.props.username ? (
							<Link to={`${this.props.username}`}>
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

const mapStateToProps = state => {
	return {
		username: state.username
	}
}

const mapDispatchToProps = dispatch => {    
	return {
		handleNameChange(event) {
			let value = event.target.value
			dispatch(handleNameChange(value))
		},
		handleCleanSearch() {
			dispatch(handleCleanSearch())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);