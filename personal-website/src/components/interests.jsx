// Importing components
import React, { Component } from 'react'
import {Animated} from "react-animated-css";
// import {FcAbout} from 'react-icons/fc';
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
                                        <h2 className="colorlib-heading"style={{"font-size": "200%"}}>Skills & Interests</h2>
                                    </Animated>
                                </div>
                            </div>
                            <div className="row row-pt-md">
                                <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
                                    <div className="col-md-5 text-center">
                                        <div className="services color-1">
                                            <div className="desc">
                                                <h3>Programming Languages</h3>
                                                <p> These are some of the programming
                                                    languages I am most familiar with:
                                                </p>
                                                <p>
                                                Python • C • C++ • JavaScript • SQL • R • Racket • Smalltalk •
                                                TypeScript • MATLAB • VHDL
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-center">
                                        <div className="services color-1">

                                            <div className="desc">
                                                <h3>Frameworks and tools</h3>
                                                <p>  These are some of the frameworks
                                                    and tools I have used in my work:
                                                </p>
                                                <p>
                                                ROS-2 • Flask • Docker • Jenkins •
                                                Hadoop • AWS • NodeJS • React • Django •
                                                Kubernetes • ElasticSearch • Kibana • Unity
                                                • Git • IntelliJ • Visual Studio
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-center">
                                        <div className="services color-1">

                                            <div className="desc">
                                                <h3>Libraries</h3>
                                                <p>  These are important libraries
                                                    that I have experience with:
                                                </p>
                                                <p>
                                                OpenCV • PyQt5 • Tensorflow • Keras
                                                • PyTorch • Sickit • Numpy • Pandas
                                                • Matplotlib • Tkinter • ElasticSearch
                                                • Scipy • Twisted
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 text-center">
                                        <div className="services color-1">

                                            <div className="desc">
                                                <h3>Natural Language Processing</h3>
                                                <p>
                                                One of my main projects, GailBot,
                                                is an automated transcription system
                                                that generates specialized transcripts
                                                to capture para-linguistic features of
                                                conversation, such as prosody and intonation.
                                                This involves using speech to text engines
                                                (IBM Watson, CMU Sphinx, Google cloud),
                                                dealing with large conversational corpora,
                                                and analyzing the data using natural
                                                language processing tool-kits.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-center">
                                        <div className="services color-1">

                                            <div className="desc">
                                                <h3>Deep Learning and Artificial Intelligence (AI)</h3>
                                                <p> My experiences in industry and
                                                    academia have given me the
                                                    ability to apply machine
                                                learning techniques to real-world problems.
                                                For example, one of my projects is aimed
                                                at using deep learning to identify and label
                                                points of miscommunication in natural
                                                conversation. Another one
                                                improves an existing model-agnostic,
                                                meta-learning framework for Graph Neural
                                                Networks. I have also taken advanced ML and AI
                                                courses at Tufts university, including
                                                Intro. to AI, Intro. to ML and data mining,
                                                and deep neural networks.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 text-center">
                                        <div className="services color-1">

                                            <div className="desc">
                                                <h3>DevOps</h3>
                                                <p>
                                                Most of my projects involve using an automated
                                                testing framework, such as Jenkins,
                                                and continuous integration techniques
                                                to ensure an efficient workflow.
                                                 </p>
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