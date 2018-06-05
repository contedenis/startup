import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

class UserRepos extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			userRepos: [],
		};

		this.handleUser = this.handleUser.bind(this);

	}

	componentDidMount() {
		this.handleUser();
	}

	handleUser() {

		let username = this.props.match.params.username;

		const config = {
			'method': 'GET',
			'url': `https://api.github.com/users/${username}/repos`
		}

		fetch(config.url)
			.then( (res) => {
				return res.json();
			})
			.then( (data) => {
				let userRepos = data
				return userRepos
			})
			.then( (userRepos) => {
				this.setState({
					userRepos: userRepos
				})
			})
			.catch( (error) => {
				console.log(error);
			})

	}

	render() {

		const username = this.props.match.params.username;
		const userRepos = this.state.userRepos;

		return (
			<div>
				<Table className="table table-fixed">
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

export default UserRepos;