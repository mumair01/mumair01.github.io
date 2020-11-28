// Importing components
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch

} from "react-router-dom";

// Importing components 
import About from './components/about';
import Sidebar from './components/sidebar';
import Projects from './components/projects';
import Interests from './components/interests';
import Resume from './components/resume';
import Experience from './components/experience';
// Importing style elements 
import './App.css';




const MainPage = () => {
	return (
		<div>
			<About/>
			<Interests/>
		</div>
	)
}


class App extends Component {
	render () {
		return (
			<div id="colorlib-page">
				<div id="colorlib-wrap">
					<Router>
						<Sidebar></Sidebar>
							<div id="colorlib-main">
								<Switch>
									<Route exact path="/" component = {MainPage}></Route>
									<Route exact path="/projects" component={Projects}></Route>
									<Route exact path="/resume" component={Resume}></Route>
									<Route exact path="/experience" component={Experience}></Route>
								</Switch>
							</div>
					</Router>
				</div>
			</div>			
		)
	}
}
export default App;
