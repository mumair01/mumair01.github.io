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
                                        <h2 className="colorlib-heading">About</h2>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
                                        <p>My name is Muhammad Umair, an undergraduate in my senior 
                                        year at Tufts university studying Computer Science. </p>
                                        <p>My area of interest includes Human Robot Interaction (HRI), 
                                            an interdisciplinary field that develops intelligent 
                                            systems with a focus on improving the human experience. 
                                            Specifically, I'm interested in developing AI agents 
                                            that go beyond problem solving in a single domain. Instead,
                                            they focus on providing a seamless human interaction based 
                                            on their knowledge of social norms.</p>
                                        <p>I believe that methods 
                                            in deep neural netowkrs and reinforcement learning, coupled 
                                            with an understanding of human cognitive processes can 
                                            improve human robot interaction. </p>
                                        <p>My mission is to continue to develop technoology that has 
                                        an observable and immediate positive impact in people's 
                                        everyday lives!</p>
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