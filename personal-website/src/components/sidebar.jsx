// Importing components
import React, { Component } from 'react'
import {
		BrowserRouter as Router,
		Route,
		Switch,
		Link,
		Redirect
} from "react-router-dom";
import { SiLinkedin, SiGithub } from 'react-icons/si';
import {MdEmail} from 'react-icons/md'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Sidebar extends Component {
    render () {
        return (
            <div>
                <aside id="colorlib-aside" className="border js-fullheight">
                    <div className="text-center">
                        <img className="author-img" src={process.env.PUBLIC_URL + "/images/about.jpg"} alt="About"></img>
                        <h1 id="colorlib-main-menu" className="colorlib-logo">Muhammad Umair</h1>
                        <span className="email">
                            <MdEmail/>
                                <a href = "mailto:muhammad.umair@tufts.edu" target="_blank" rel='noreferrer'>
                                        muhammad.umair@tufts.edu
                                </a>
                        </span>
                         <span className="email">
                                <MdEmail/>
                                <a href = "mailto:umair.aarij@gmail.com" target="_blank" rel='noreferrer'>
                                        umair.aarij@gmail.com
                                </a>
                        </span>
                    </div>
                    <div id="colorlib-main-menu" role="navigation" className="navbar">
                            <ul>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#interests">Skills / Interests</a></li>
                                <li><Link to="/resume">Resume / CV</Link></li>
                                <li><Link to="/experience">Experience</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                            </ul>
                    </div>
                    <div className="text-center">
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/mumair/" 
                                    target="_blank" rel="noopener noreferrer"><i 
                                    /><SiLinkedin/></a>
                                </li>
                                <li>
                                    <a href="https://github.com/mumair01" 
                                    target="_blank" rel="noopener noreferrer"><i 
                                    /><SiGithub/></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="colorlib-footer">
                        <p><small>Muhammad Umair - Personal website</small></p>
                        <p><small>In active development - More coming soon!</small></p>
                    </div>
                </aside>

            </div>
        )
    }
}
