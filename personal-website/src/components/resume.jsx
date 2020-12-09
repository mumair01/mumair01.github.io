// Importing components
import React, { Component } from 'react'
import {Animated} from "react-animated-css";
import ScrollableAnchor from 'react-scrollable-anchor'
import {
		BrowserRouter as Router,
		Link,
} from "react-router-dom";


class Doc extends Component {


    render () {
        return (
            <div>
                <nav>
                    <button>
                        <Link to={process.env.PUBLIC_URL + this.props.file} target="_blank" download>Download</Link>
                    </button>
                </nav>
                <iframe title="CV" 
                src={process.env.PUBLIC_URL + this.props.file}  
                style={{
                    "width":"90%",
                    "height":"600px",
                    "border":"2px solid black",
        
                    }}
                ></iframe>
           </div>
        )
    }
}

export default class Resume extends Component {
    render (){
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <ScrollableAnchor id={'resume'}>
                        <div className="colorlib-narrow-content">
                            <div>
                                <div className="col-md-12">
                                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={2000}>
                                        <h2 className="colorlib-heading" style={{"font-size": "200%"}}>Resume / CV</h2>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
                                        <Doc file={"/docs/Resume.pdf"}></Doc>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                    </ScrollableAnchor>
                </section>
            </div>
        )
    }


}