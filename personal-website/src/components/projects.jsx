// Importing components 
import React, { Component, useState } from 'react'
import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import {Animated} from "react-animated-css";
import {
		BrowserRouter as Router,
		Route,
		Switch,
		Link,
		Redirect
} from "react-router-dom";
import ScrollableAnchor from 'react-scrollable-anchor'
import ReactPlayer from "react-player"
// Importing CSS
import "ka-table/style.css";

const CustomLinkCell = ({
  rowData // data of particular row
}) => {
  return (
	<a href={rowData.section_link}>{rowData.name}</a>
  );
};

const tablePropsInit: ITableProps = {
  columns: [
    { key: 'name', title: 'Project Names', dataType: DataType.String },
    { key: 'keywords', title: 'Keywords', dataType: DataType.String },
    { key: 'affiliation', title: 'Affiliation', dataType: DataType.String },
    { key: 'dates', title: 'Project dates', dataType: DataType.String },
  ],
  data: [
	{
		name: "GailBot: An automated system for Conversation Analysis",
		keywords: "Python, NLP, ML, Statistical Modelling",
		affiliation: 'Human Interaction Lab @ Tufts',
		dates: 'May 2018 - Present',
		section_link: "#GailBot",
		section: "GailBot"
	},
	{
		name: "G-Meta Plus",
		keywords: "Graph Neural Networks, Meta-learning",
		dates:"Nov. 2020 - Present",
		affiliation: "Deep Neural Networks @ Tufts University",
		section_link: "#g_meta_plus",
		section: "g_meta_plus"
	},
	{
		name:  'NextGen Alert System',
		keywords: "Python, React, Kibana, ElasticSearch",
		affiliation: 'Tufts Technology Services (TTS)',
		dates: 'Oct 2020 - Present',	
		section_link: "#NextGen",
		section: "NextGen"
	},
	{
		name: "GailBot: UI / UX design",
		keywords: "Frontend, UI/UX, Human Factors Engineering, PyQt5",
		affiliation: "Human Interaction Lab @ Tufts",
		dates: "Sept. 2020 - Present",
		section_link : "#GailBot_UI_UX",
		section: "GailBot_UI_UX"
	},
	{ 
		name: "Camera calibration and distortion visualization",
		keywords: "OpenCV, Computer Vision, AI, ROS, PyQt5",
		affiliation: "Vicarious Surgical",
		dates: "May 2020 - Dec. 2020",
		section_link: "#camera_calibration",
		section:"camera_calibration"
	},
	{
		name: "Jeffersonize: CHAT/CAlite converter",
		keywords : "C++", 
		affiliation: "Human Interaction Lab @ Tufts",
		dates: "July 2018 - Sept. 2018",
		section_link: "#jeffersonize",
		section: "jeffersonize"
	}
  ],

  rowKeyField: 'name',
  sortingMode: SortingMode.Single,
};

const MainTable = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const onDispatch: DispatchFunc = action => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };
  return (
    <Table
      {...tableProps}
      childComponents={{
        cellText: {
          content: props => {
            // eslint-disable-next-line default-case
            switch (props.column.key) {
              case "name": // 2. override component for "representative.name" column
                return <CustomLinkCell {...props} />;
            }
          }
        }
      }}
      dispatch={onDispatch}
    />
  );
};


function ColoredLine(props) {
	return (
		<hr
			style={{
				color: props.color,
				backgroundColor: props.color,
				height: 0.5
			}}
		/>
	)

}

export default class Projects extends Component {
	render (){
		return (
			<div>
				<section className="colorlib-about">
					<ScrollableAnchor id={'projects'}>
						<div className="row col-md-12 colorlib-narrow-content">
							<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={2000}>
								<h2 className="colorlib-heading" style={{"font-size": "200%"}}>Projects</h2>
							</Animated>
							<Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
								<MainTable/>
							</Animated>
						</div>
					</ScrollableAnchor>
				</section>
				<section className="colorlib-about" data-section="GailBot">
					<ScrollableAnchor id={'GailBot'}>
						<div className="row col-md-12 colorlib-narrow-content">
							<Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
								<ColoredLine color ='black'/>
								<h3 className="colorlib-heading">GailBot: An automated transcription system for Conversation Analysis</h3>
								<h3>Human Interaction Lab - Tufts University<br/>May 2018 - Present</h3>
								Motivation:
								<ul>
									<li>Develop an automated Speech To Text (STT) system that 
									transcribes para-linguistic features of conversation, such as 
									prosody, intonation, and laughter.</li>
									<li>This tool allows researchers in conversation analysis,
									human-robot interaction, and cognitive science to analyze interaction 
									rather than focusing on data generation. </li>
									<li> There is no existing tool that focuses on generating 
									Jeffersonian transcripts by marking interesting features 
									of conversation.
									</li>
								</ul>
								Role:
								<ul>
									<li> Designed and developed an automated speech to text
									system that uses novel statistical models to identify and 
									transcribe para-linguistic features of conversation such as 
									prosody, intonation, and laughter.
									</li>
									<li> Collaborated with graduate students at Tufts 
									to identify important conversational features 
									and recruited undergraduate interns to the 
									development team.
									</li>
									<li>Presented at <a href="https://amlap2020.org/" target="_blank" rel="noreferrer"> AMLAP 2020 
									</a> and submitted to <a href="http://www.dialogue-and-discourse.org/" target="_blank" rel="noreferrer">Dialogue and 
									Discourse</a> as a <a href="https://osf.io/ap4s7/" target="_blank" rel="noreferrer">
									 first authored paper</a>, which is currently under review.</li>
								</ul>
								Technical details:
								<ul>
									<li>Allows multi-language transcription through
									multiple speech to text engines,
									with custom language and custom acoustic models.</li>
									<li>Includes post-processing modules that 
									include laughter detection, speech rate detection, and 
									overlap detection. These can be easily extended 
									to identify more complex conversational features.</li>
									<li>Uses threading to process 
									utpo 1000 conversations in parallel.</li>
								</ul>
								Future goals:
								<ul>
									<li>A newer version of GailBot is currently under 
									development and will feature multiple 
									STT engines (IBM Watson, CMU Sphinx etc),
									a GUI interface, and audio segmentation
									for multi-speaker audio files.</li>
								</ul>
								Collaborators:
								<ul>
									<li><a href="https://engineering.tufts.edu/people/faculty/jp-de-ruiter"target="_blank" rel="noreferrer">
										J.P de Ruiter
									</a>- PI of the Human Interaction Lab at Tufts</li>
									<li><a href="https://www.juliamertens.net/"target="_blank" rel="noreferrer">
										Julia Mertens
									</a> - Miscommunication statistical modelling lead.<br/>		
									</li>
									<li><a href="https://saulalbert.net/"target="_blank" rel="noreferrer">
										Saul Albert
									</a> - Conversation Analysis expert
									</li>
									
								</ul>
								Additional Resources:
								<ul>
									<li><a href="https://github.com/HiLabTufts/GailBot"target="_blank" rel="noreferrer">
										GailBot official release 
									</a> 
									</li>
									<li><a href="https://sites.tufts.edu/hilab/files/2020/09/AMLAP-VIDEO.mp4" target="_blank" rel="noreferrer">
										Poster presentation
									</a> by Julia Mertens and Muhammad Umair - AMLAP 2020
									</li>
									<li><a href="https://youtu.be/8dRXdPs5wRU" target="_blank" rel="noreferrer">
										Three meeting points between Conversation Analysis and AI 
									</a> by Saul Albert - ECCA 2020
									</li>
									<li><a href="https://sites.tufts.edu/hilab/" target="_blank" rel="noreferrer">
										Human Interaction Lab at Tufts University
									</a> 
									</li>
								</ul>
								<br></br>
								<ReactPlayer url="https://youtu.be/3Omp3aeuJf4"/>
								<ColoredLine color ='black'/>
							</Animated>
						</div>
					</ScrollableAnchor>
				</section>
				<section className="colorlib-about" data-section="g_meta_plus">
					<ScrollableAnchor id={'g_meta_plus'}>
						<div className="row col-md-12 colorlib-narrow-content">
							<Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
								<ColoredLine color ='black'/>
								<h3 className="colorlib-heading">G-Meta Plus</h3>
								<h3>Deep Neural Networks - Tufts University<br/>Nov. 2020 - Present</h3>
								
								<p><i>This project started as the final project 
									for Comp-137: Deep Neural Networks at Tufts 
									university in Fall 2020.</i></p>

								Motivation:
								<ul>
									<li>
										G-Meta, a model-agnostic meta-agnostic meta-
										learning method for fast adaptation of 
										deep networks, can be improved by 
										incorporating some global graph structure. 
										It currently only incorporates local 
										sub-graph structure. 
									</li>
									<li>G-Meta uses Probabalistic Nearest Neighbor 
									(PrNN) classification to make predictions. Our 
									hypothesis is that we can replace PrNN with a 
									more effective metric-learning technique. </li>
								</ul>
								Role:
								<ul>
									<li>Provided theoretical justification 
									of using subgraph relationships to incorporate 
									global structure knowledge in G-Meta.  
									</li>
									<li>Determined that a relation network 
									would be a good replacement for the PrNN component 
									of G-Meta. </li>
									<li>Modified original G-Meta code to implement 
									the changes described above and set up the 
									architecture in Google Colab to train the model. </li>
								</ul>
								Technical details:
								<ul>
									<li>Replaced PrNN with a relation network in G-Meta
									to train a function to compare support and query data.</li>
									<li>Incorporated shortest path between sub-graphs as one of the 
									augmented features to incorporate global structure knowledge.</li>
									<li>Achieved an accuracy on node classification 
										tasks (83%) that is two standard deviations higher 
										than that of G-Meta (76%).
									</li>
								</ul>
								Future goals:
								<ul>
									<li>We presented this project as part of the 
										Comp-137: Deep Neural Networks course
										at Tufts university on Dec. 17th 2020 
										and plan to publish it as a research paper.  </li>
								</ul>
								Collaboratos:
								<ul>
									<li><a href="https://www.linkedin.com/in/mert-erden-460007a8/" target="_blank" rel="noreferrer">
										Mert Edren
									</a> - Tufts University 
									</li>
									<li>
										<a href="https://www.linkedin.com/in/gianmarcovisani/" target="_blank" rel="noreferrer">
										Gian Marco Visani
									</a> - Tufts University 
									</li>
									
								</ul>
								Additional Resources:
								<ul>
									<li>
										<Link to={process.env.PUBLIC_URL + "/docs/G-Meta-proposal.pdf"} target="_blank">G-Meta plus original proposal </Link>
									</li>
									<li>
										<a href="https://arxiv.org/abs/2006.07889"target="_blank" rel="noreferrer">
										Graph Meta Learning via Local Subgraphs - 
										Huang, Kexin and Zitnik, Marinka, NeurIPS, 2020
									</a>
									</li>
							
								</ul>
								<br></br>
								<ReactPlayer url="https://youtu.be/OQEPZb0R1jc"/>
								<ColoredLine color ='black'/>
							</Animated>
							
						</div>
					</ScrollableAnchor>
				</section>
				<section className="colorlib-about" data-section="NextGen">
					<ScrollableAnchor id={'NextGen'}>
						<div className="row col-md-12 colorlib-narrow-content">
							<Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
								<ColoredLine color ='black'/>
								<h3 className="colorlib-heading">NextGen Alert System </h3>
								<h3>Tufts Technology Services (TTS) - Tufts University<br/>Oct. 2020 - Present</h3>

								<p><i>This project is conducted as part of the 
									Senior Capstone requirement in the Computer Science 
									department at Tufts university.</i></p>
							
								Motivation:
								<ul>
									<li>TTS requires a Security and Event Management system,
									 as an alternative to commercial software, 
									 that Provides real-time visualization, reporting, 
									 and alerting of ElasticSearch data clusters.</li>
									<li>A user interaction layer is needed to abstract 
									specific endpoints, such as ElasticSearch and Kibana, 
									away from the user.</li>
									<li>Need for a mechanism to send alerts through 
									a pre-defined medium (such as email) based on 
									results of queries to the cluster.</li>
								</ul>
								Role:
								<ul>
									<li>Designed a flask-based backend through 
									collaboration with the entire team, with 
									security and encryption as a primary concern.</li>
									<li>Developed a RESTful API to connect 
									the frontend with backend endpoints, such as 
									ElasticSearch and Kibana. </li>
								</ul>
								Technical details:
								<ul>
									<li>Technical details are not publically 
									available. Please reach out for more information.</li>
								</ul>
								Future goals:
								<ul>
									<li>Present the final product to TTS by May 2021.</li>
									<li>Incorporate machine learning techniques to 
									analyze data trends in the cluster.</li>
								</ul>
								Collaboratos:
								<ul>
									<li><a href="https://www.linkedin.com/in/andrew-wang-110102157/"target="_blank" rel="noreferrer">
										Andrew Wang
									</a> - Developer
									</li>
									<li><a href="https://www.linkedin.com/in/kate-hanson-227359171/"target="_blank" rel="noreferrer">
										Kate Hanson
									</a> - Developer
									</li>
									<li><a href="https://www.linkedin.com/in/james-cameron-718694190/"target="_blank" rel="noreferrer">
										James Cameron
									</a> - Developer
									</li>
								</ul>
								Additional Resources:
								<ul>
									<li><a href="https://nextgenalerts.wordpress.com/"target="_blank" rel="noreferrer">
										Engineering notebook for NextGen Alerts.
									</a> 
									</li>
								</ul>
								<ColoredLine color ='black'/>
							</Animated>
							
						</div>
					</ScrollableAnchor>
				</section>
				<section className="colorlib-about" data-section="GailBot_UI_UX">
					<ScrollableAnchor id={'GailBot_UI_UX'}>
						<div className="row col-md-12 colorlib-narrow-content">
							<Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
								<ColoredLine color ='black'/>
								<h3 className="colorlib-heading">GailBot: UI / UX Design</h3>
								<h3>Human Interaction Lab - Tufts University<br/>Sept. 2020 - Present</h3>
								Motivation:
								<ul>
									<li>GailBot, an automated system for generating 
									Jeffersonian transcipts, is currently a command line tool.
									It needs to be converted to a graphical user interface (GUI)
									for non-technical users.</li>
									<li>GUI needs to be based on feedback from the CA community, 
									accessible, and abstract enough to integrate 
									future components.</li>
								</ul>
								Role:
								<ul>
									<li>Supervised an internship to design of a
									 CLI/GUI for GailBot using wireframes and user testing rounds.</li>
									<li>Implemented the design using the PyQt5 
									framework and integrated it into GailBot.</li>
								</ul>
								Technical details:
								<ul>
									<li>Incorporated feedback from multiple user testing 
									rounds to create a functional GUI wireframe.</li>
									<li>Used PyQt5 to implement the GUI based on the 
									model-view-controller design pattern, which separates 
									the backend and frontend.</li>
								</ul>
								Future goals:
								<ul>
									<li>Complete the GUI implementation.</li>
								</ul>
								Collaboratos:
								<ul>
									<li><a href="https://evadenman.com/index.html"target="_blank" rel="noreferrer">Eva Denman</a> - Lead designer / Intern @ the Tufts Human Interaction Lab</li>
								</ul>
								Additional Resources:
								<ul>
									<li>Documentation and video tutorials coming soon!</li>
								</ul>
								<ColoredLine color ='black'/>
							</Animated>
							
						</div>
					</ScrollableAnchor>
				</section>
				<section className="colorlib-about" data-section="camera_calibration">
					<ScrollableAnchor id={'camera_calibration'}>
						<div className="row col-md-12 colorlib-narrow-content">
							<Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
								<ColoredLine color ='black'/>
								<h3 className="colorlib-heading">Camera calibration and distortion visualization</h3>
								<h3>Vicarious Surgical<br/>May. 2020 - Dec. 2020</h3>
								Motivation:
								<ul>
									<li>An internal tool is needed to ensure that there are no 
									significant distortions in a visual input of a robot, and 
									correct for these distortions if they exist.</li>
									<li>The tool needs to visualize the process through which 
									it removed image distortions. This includes visualizing the 
									detected calibration pattern, the detected corners, 
									and the final error between the original and un-distorted images.</li>
									<li>The tool is required to be dockerized to be integrated into a 
									larger pipeline. </li>
								</ul>
								Role:
								<ul>
									<li>Developed a tool that uses RANSAC and blob detection detect calibration 
									patterns and remove image distortions in real-time in a robot’s visual input,
									 and provides a full GUI implemented in PyQt5</li>
									<li>Dockerized the tool and ROS environment to
									 ensure cross-platform support.</li>
									 <li>Integrated a component to provide various 
									 visualizations for errors between distorted and un-distorted images.</li>
								</ul>
								Technical details:
								<ul>
									<li>The tool was designed based on the Model View Controller (MVC) design pattern.</li>
									<li>Used <a href="https://opencv.org/"target="_blank" rel="noreferrer">OpenCV</a> to 
									 extract camera intrinsics/extrinsics and remove image distortions based on 
									 their value. </li>
									<li>Supports multipel calibration patterns as abstract entities.</li>
									<li>Further technical details are not publicvally available.
									Please reach out for more information.</li>
								</ul>
								Future goals:
								<ul>
									<li>The project has been fully completed.</li>
								</ul>
								Collaboratos:
								<ul>
									<li><a href="https://engineering.tufts.edu/cs/people/faculty/fabrizio-santini"target="_blank" rel="noreferrer">Fabrizio Santini</a> - Principal AI Engineer @ Vicarious Surgical</li>
								</ul>
								Additional Resources:
								<ul>
									<li>Available on request.</li>
								</ul>
								<ColoredLine color ='black'/>
							</Animated>
							
						</div>
					</ScrollableAnchor>
				</section>
				<section className="colorlib-about" data-section="jeffersonize">
					<ScrollableAnchor id={'jeffersonize'}>
						<div className="row col-md-12 colorlib-narrow-content">
							<Animated animationIn="fadeInUp" isVisible={true} animationInDuration={2000}>
								<ColoredLine color ='black'/>
								<h3 className="colorlib-heading">Jeffersonize: CHAT/CAlite converter</h3>
								<h3>Human Interaction Lab - Tufts University<br/>July 2018 - Sept. 2018</h3>
								Motivation:
								<ul>
									<li>
										There was a need to create a 
										computer-readable version of the 
										Conversation Analysis (CA) transcription 
										format used by Conversation Analysts. 
									</li>
									<li>
										This new computer-readable format needs 
										to be integrated with the existing 
										transcription format: CHAT. 
									</li>
								</ul>
								Role:
								<ul>
									<li>
										Integrated new symbols into the existing 
										transcprion format, CA, to create CAlite.
									</li>
									<li>
										Designed and implemeted Jeffersonize, a 
										tool to enable bi-directional conversion 
										between CHAT and CAlite. 
									</li>
								</ul>
								Technical details:
								<ul>
									<li>The tool has an object-oriented design 
										with a base class for shared conversion 
										and sub-classes for bi-directional conversions. 
									</li>
								</ul>
								Future goals:
								<ul>
									<li>The project has been fully completed.</li>
								</ul>
								Collaboratos:
								<ul>
									<li><a href="https://saulalbert.net/"
										target="_blank" rel="noreferrer">Saul Albert</a> - 
										Project manager </li>
								</ul>
								Additional Resources:
								<ul>
									<li>
									<a href="https://github.com/mumair01/Jeffersonize"
										target="_blank" rel="noreferrer">Jeffersonize repository</a>
									</li>
									<li>
									<a href="https://sites.tufts.edu/hilab/"
										target="_blank" rel="noreferrer">Tufts Human Interaction Lab</a>
									</li>
								</ul>
								<ColoredLine color ='black'/>
							</Animated>
							
						</div>
					</ScrollableAnchor>
				</section>
			</div>
		)
	}
}