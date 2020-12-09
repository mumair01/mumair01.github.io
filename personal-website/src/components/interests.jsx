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
                                                <p> My experience in industry and academia 
                                                has given me the ability to apply machine 
                                                learning techniques to real-world problems. 
                                                I have also taken a number of ML/AI courses at Tufts, 
                                                which include Intro. to AI, Intro. to ML and data mining, 
                                                Deep Neural Networks, Linear Algebra, and Calculas (1, 2, and 3).</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="services color-1">
                                            <FcAbout/>
                                            <div className="desc">
                                                <h3>Natural Language Processing</h3>
                                                <p>
                                                One of my major projects, GailBot, 
                                                involved using many different speech to 
                                                text engines, from IBM's Watson to CMU 
                                                Sphinx, to transcribe conversation.
                                                GailBot, and other projects, have 
                                                given me experience in working with 
                                                natual language toolkits and speech 
                                                to text engines. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="services color-1">
                                            <FcAbout/>
                                            <div className="desc">
                                                <h3>Application design</h3>
                                                <p> 
                                                Most of my projects involve using 
                                                object-oriented design principles
                                                to create abstract backends. This 
                                                includes backends for the Tufts 
                                                Technology Services NextGen. alert 
                                                system and the camera calibration tool
                                                for Vicarious Surgical.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="services color-1">
                                            <FcAbout/>
                                            <div className="desc">
                                                <h3>DevOps</h3>
                                                <p> My personal projects involve using Jenkins, Docker, Git, 
                                                and other frameworks to ensure 
                                                continuous integration and 
                                                an efficient workflow.
                                                I'm interested in learning more 
                                                about machine learning specific 
                                                pipelines, or ML-OPS more broadly. </p>
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