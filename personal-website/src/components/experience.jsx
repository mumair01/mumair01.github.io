import React, { Component} from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import {Animated} from "react-animated-css";
import {FcAbout} from 'react-icons/fc';


export default class Experience extends Component {
    render () {
        return (
            <div>
                <section className="colorlib-about">
                    <ScrollableAnchor id={'experience'}>
                        <div className="row col-md-12 colorlib-narrow-content">
                            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={2000}>
								<h2 className="colorlib-heading">Experience</h2>
							</Animated>
                        </div>
                    </ScrollableAnchor>
                </section>
                <section className="colorlib-about" data-section="Education experience">
                    <Animated animationIn="fadeInRight" animationInDuration={3000}>
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                            <h2 className="colorlib-heading">Education</h2>
                        </div>
                    </Animated>
                    <div className="row col-md-12 timeline-centered">
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Tufts University
                                        <br></br><span> Medford, MA </span><br></br><span> 2017 - Present (Expected 2021)</span></h2>
                                    <p>Pursuing a Bachelors of Science in Computer Science (BSCS)
                                        and minor in Cognitive Brain Science (CBS)</p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>The City School - CCI
                                        <br></br><span> Islamabad, Pakistan </span><br></br><span> 2015 - 2017</span></h2>
                                    <p>Completed GCE O/A level qualifications</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="colorlib-about" data-section="Technical experience current">
                    <Animated animationIn="fadeInRight" animationInDuration={3000}>
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                            <h2 className="colorlib-heading">Technical Experience - Current</h2>
                        </div>
                    </Animated>
                    <div className="row col-md-12 timeline-centered">
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Tufts Technology Services (TTS) - Student Employee
                                        <br></br><span> Medford, MA </span><br></br><span>Oct. 2020 - Present</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                         <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Tufts Human Interaction Lab - Lab Manager
                                        <br></br><span> Medford, MA </span><br></br><span>Jan. 2019 - Present</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="colorlib-about" data-section="Work experience">
                    <Animated animationIn="fadeInRight" animationInDuration={3000}>
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                            <h2 className="colorlib-heading">Technical Experience - Previous</h2>
                        </div>
                    </Animated>
                    <div className="row col-md-12 timeline-centered">
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Vicarious Surgical - Artificial Intelligence Intern
                                        <br></br><span> Medford, MA </span><br></br><span>May 2020 - Dec. 2020</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Tufts Human Interaction Lab - Research Intern
                                        <br></br><span> Medford, MA </span><br></br><span>May 2018 - Jan. 2019</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Tufts University - Teaching Assistant
                                        <br></br><span> Medford, MA </span><br></br><span>May 2018 - Jan. 2019</span></h2>
                                    <p>Teaching assistant for Intro. to Computational Design, 
                                        taught by Professor Soha Hassoun, at Tufts University.</p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Pakistan Aeronautical Complex (PAC)
                                        <br></br><span> Kamra, Pakistan </span><br></br><span>June 2016 - Aug. 2016</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="colorlib-about" data-section="Other experience">
                    <Animated animationIn="fadeInRight" animationInDuration={3000}>
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                            <h2 className="colorlib-heading">Other work experience</h2>
                        </div>
                    </Animated>
                    <div className="row col-md-12 timeline-centered">
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Tufts University Conference and Event Services - Summer Intern
                                        <br></br><span> Medford, MA </span><br></br><span>May 2019 - Sept. 2019</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Tufts University Career Center - Summer Office Assistant
                                        <br></br><span> Medford, MA </span><br></br><span>May 2018 - Sept. 2018</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box">
                            <div className ="timeline-entry-inner">
                                <div className="timeline-label">
                                        <FcAbout></FcAbout>                    
                                    <h2>Elliot Pearson's Children School - Administrative Assistant
                                        <br></br><span> Medford, MA </span><br></br><span>Jan. 2018 - May. 2019</span></h2>
                                    <p></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        )
    }

}
