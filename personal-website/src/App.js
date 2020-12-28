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
import NewsTicker from './components/news_ticker';
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
					<Router basename={"/"}>
						<Sidebar></Sidebar>
						{/* <NewsTicker/> */}
							<div id="colorlib-main">
								<Switch>
									<Route exact path="/" component = {MainPage}></Route>
									<Route path="/projects" component={Projects}></Route>
									<Route path="/resume" component={Resume}></Route>
									<Route path="/experience" component={Experience}></Route>
									<Route path="/*" component={MainPage}></Route>
								
								</Switch>
							</div>
					</Router>
				</div>
			</div>			
		)
	}
}
export default App;
