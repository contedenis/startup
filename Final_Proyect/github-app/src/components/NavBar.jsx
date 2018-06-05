import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => (
	<Navbar inverse collapseOnSelect className='navbar'>
		<Navbar.Header>
			<Navbar.Brand alt='Navbar Github API'>
				GitHub API
			</Navbar.Brand>
		<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem className="navitem" alt='Home'>
					<Link to="/">Home</Link>
				</NavItem>
				<NavItem className="navitem" alt='Trending repositories'>
					<Link to="/search-repositories/">Trending repositories</Link>
				</NavItem >
				<NavItem className="navitem" alt='Search by language'>
					<Link to="/search-by-languages/">Search by language</Link>
				</NavItem>
				<NavItem className="navitem" alt='Search users'>
					<Link to="/search-users/">Search users</Link>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>   
)

export default NavBar;