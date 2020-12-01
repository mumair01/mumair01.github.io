// Importing components 
import React, { Component } from 'react'
import {Animated} from "react-animated-css";
import {FcAbout} from 'react-icons/fc';
import ScrollableAnchor from 'react-scrollable-anchor';


export default class Interests extends Component {
    render() {
        return (
            <div>
                <ScrollableAnchor id={'interests'}>
                    <section className="colorlib-about" data-section="interests">
                    
                        <div className="colorlib-narrow-content">
                            <div className = "row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 ">
                                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={2000}>
                                        <h2 className="colorlib-heading"style={{"font-size": "200%"}}>Skills / Areas of interest</h2>
                                    </Animated>
                                </div>
                            </div>
                            <div className="row row-pt-md">
                                <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
                                    <div className="col-md-4 text-center">
                                        <div className="services color-1">
                                            <FcAbout/>
                                            <div className="desc">
                                                <h3>Machine Learning / Artificial Intelligence</h3>
                                                <p> My experience as an Artificial Intelligence intern at 
                                                    Vicarious Surgical and research at the Tufts Human 
                                                    Interaction Lab has allowed me to solve real problems 
                                                    using ML/AI techniques. 
                                                    Additionally, I've taken a number of ML / AI courses at Tufts, including 
                                                    Intro. to Artificial Intelligence, Intro. to Machine Learning, 
                                                    Deep Neural Networks, Linear Algebra, and Calculus-III.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="services color-1">
                                            <FcAbout/>
                                            <div className="desc">
                                                <h3>Natural Language Processing</h3>
                                                <p>My work at the Human Interaction Lab at Tufts involves 
                                                exploring algorithmic approaches to Conversation Analysis, 
                                                a method that seeks to identify the underlying structure of 
                                                natural conversation. This involves working with Speech to Text 
                                                (STT) systems and develop NLP frameworks.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="services color-1">
                                            <FcAbout/>
                                            <div className="desc">
                                                <h3>Application design</h3>
                                                <p>Most of my major projects have involved coming up 
                                                with an abstract designs for applications based on
                                                common design patterns. These involve designing the backends 
                                                for the Tufts Technology Services NextGen. Alert System and 
                                                Camera Calibration tool for Vicarious Surgical.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="services color-1">
                                            <FcAbout/>
                                            <div className="desc">
                                                <h3>DevOps</h3>
                                                <p> My personal projects involve using Jenkins, Docker, Git, 
                                                and pther frameworks for constructing a Continuous Integration
                                                pipelines for separate project environments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Animated>
                            </div>
                        </div>
                    </section>
                </ScrollableAnchor>
            </div>

        )

    }


}