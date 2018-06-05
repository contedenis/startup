import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { handleUserRepos } from '../actionCreators'

class UserRepos extends React.Component {

	componentDidMount() {
		this.props.handleUserRepos(this.props.match.params.username);
	}

	render() {

		const username = this.props.match.params.username;
		const userRepos = this.props.userRepos;

		return (
			<div>
				<Table className="table table-fixed userRepos">
					<tbody>
						{
							userRepos.map((repo) => (
								<tr>
									<td>
										<Link to={`/repositorie-details/${username}/${repo.name}`}>
											<a alt={repo.name}>{repo.name}</a>
										</Link>
									</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		userRepos: state.userRepos
	}
}

const mapDispatchToProps = dispatch => {    
	return {
		handleUserRepos(user) {
			dispatch(handleUserRepos(user))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);