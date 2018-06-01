import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap'
import SearchUser from './SearchUser'
import loading from '../images/loading.gif'

class Users extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            getUsers: false,
            users: []
        };

        this.handleSearchUsers = this.handleSearchUsers.bind(this);

    }

    handleSearchUsers() {
    
    this.setState({
        getUsers: true
    })

    let userToFind = this.props.match.params.username

    const config = {
        'method': 'GET',
        'url': `https://api.github.com/search/users?q=${userToFind}`
    }

    fetch(config.url)
        .then( (res) => {
            return res.json();
        })
        .then( (data) => {
            let listUser = data.items
            return listUser
        })
        .then( (listUser) => {
            this.setState({
                getUsers: false,
                users: listUser
            })
        })
        .catch( (error) => {
            console.log(error);
        })  
    }

    componentDidMount() {
        this.handleSearchUsers();
      }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username) {
            this.handleSearchUsers();
        }
    }

    render() {

        if (this.state.getDate === true) {
            return (
                <p className="gif">
                    <img src={loading} alt="loading"/>
                </p> 
            )
        }

        const usersToShow = this.state.users

        return (
            <div>
                <SearchUser />
                <div class="show-repositories">
                    <div class="column half no_float">
                        <Table className="table table-fixed">
                            <tbody>
                                {
                                    usersToShow.map((user) => (
                                        <tr>
                                            <td>
                                                <img src={user.avatar_url} alt="user"/>
                                            </td>
                                            <td>
                                                <Link to={`/user-details/${user.login}`}>
                                                    <a alt={user.login}><h4>{user.login}</h4></a>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;