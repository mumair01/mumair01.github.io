// Importing components
import React, { Component } from 'react'
import {Animated} from "react-animated-css";
import ScrollableAnchor from 'react-scrollable-anchor'
import { Document, Page,pdfjs } from 'react-pdf';
import {
		BrowserRouter as Router,
		Link,
} from "react-router-dom";

class Doc extends Component {
    

   constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    } 
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {

    this.setState({ numPages });
  };

    goToPrevPage = () => {
         if (this.state.pageNumber - 1 > 0){
            this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
        }
    }
    goToNextPage = () => {
        if (this.state.pageNumber + 1 <= this.state.numPages){
            this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
        }
    }

    render() {
        const { pageNumber, numPages } = this.state;

    return (
        <div>
            <nav>
            <button onClick={this.goToPrevPage}>Prev</button>
            <button onClick={this.goToNextPage}>Next</button>
            <button>
                <Link to={this.props.file} target="_blank" download>Download</Link>
            </button>

            </nav>

            <div style={{ width: 600 }}>
      
            <Document
                file={this.props.file}
                onLoadSuccess={this.onDocumentLoadSuccess}
                onLoadError={console.error}>
                <Page pageNumber={pageNumber} scale={1.3}/>
            </Document>
          
        
            </div>

            <p>
            Page {pageNumber} of {numPages}
            </p>
        </div>
        );
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
                                        <h2 className="colorlib-heading">Resume / CV</h2>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
                                        <Doc file={"./docs/Resume.pdf"}></Doc>
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