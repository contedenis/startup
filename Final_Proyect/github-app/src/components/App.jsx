import React from 'react'
import { Route } from "react-router-dom"
import Header from './Header'
import Home from './Home'
import ShowTrendingRepositories from './ShowTrendingRepositories'
import SearchRepositoriesByLanguage from './SearchRepositoriesByLanguage'
import SearchUser from './SearchUser'
import Users from './Users'
import UserDetails from './UserDetails'
import RepositorieDetails from './RepositorieDetails'
import Footer from './Footer'


const App = () => (
	<div className="container">
		<Header/>
			<main>
				<Route exact path="/" component={Home} />
				<Route path="/search-repositories/" component={ShowTrendingRepositories} />   
				<Route path="/search-by-languages/" component={SearchRepositoriesByLanguage} />
				<Route exact path="/search-users/" component={SearchUser} />
				<Route path="/search-users/:username" component={Users} />
				<Route path="/user-details/:username" component={UserDetails} />
				<Route component={RepositorieDetails} path={`/repositorie-details/:username/:reponame/`}/>
			</main>
		<Footer/>
	</div>
)

export default App;