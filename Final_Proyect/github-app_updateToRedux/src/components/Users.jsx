import React from 'react'
import { Link } from "react-router-dom"
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import SearchUser from './SearchUser'
import loading from '../images/loading.gif'
import { handleSearchUsers, handleFetching } from '../actionCreators'

class Users extends React.Component {
 
    componentDidMount() {
        this.props.handleSearchUsers(this.props.match.params.username);
    }

    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username) {
            this.props.handleSearchUsers(this.props.match.params.username);
        }
    }   

    render() {

        if (this.props.isFetching === true) {
            return (
                <p className="gif">
                    <img src={loading} alt="loading"/>
                </p> 
            )
        }

        const usersToShow = this.props.usersList

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

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        usersList: state.usersList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchUsers(userToFind) {
            dispatch(handleFetching())
            dispatch(handleSearchUsers(userToFind))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);