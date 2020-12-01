// Importing components
import React, { Component } from 'react'
import {Animated} from "react-animated-css";
import ScrollableAnchor from 'react-scrollable-anchor'

export default class About extends Component {
    render (){
        return (
            <div>
                <ScrollableAnchor id={'about'}>
                    <section className="colorlib-about" data-section="about" id={'about'}>
                        <div className="colorlib-narrow-content">
                            <div>
                                <div className="col-md-12">
                                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={2000}>
                                        <h2 className="colorlib-heading" style={{"font-size": "200%"}}>About</h2>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
                                    <div style={{"font-size": "medium"}}>
                                        <p>My name is Muhammad Umair. I'm an undergraduate in my senior 
                                        year at Tufts university studying Computer Science.
                                        This website is intended to serve as a showcase 
                                        of my experiences as a programmer, the projects 
                                        I've worked on, and my research interests. </p>
                                        <p> From Software engineering to DevOps to research,
                                        I'm primarily interested in solving 
                                        problems in a dynamic,
                                        fast-paced, and challenging environment. </p>
                                        <p>My research interests include Human Robot Interaction (HRI),
                                        an interdisciplinary field developing artificial 
                                        agents with a focus on improving the interactions 
                                        between humans and robots. I'm particularly interested in 
                                        using reinforcement and deep learning to incorporate 
                                        notions of social norm 
                                        into AI agents.</p>
                                        <p>My overall goal is to aid in the development of 
                                        technology that has a direct and observable 
                                        impact on people's lives.</p>
                                    </div>
                                        
                                    </Animated>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollableAnchor>
            </div>
        )
    }


}