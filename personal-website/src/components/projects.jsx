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
		affiliation: 'Human Interaction Lab',
		dates: 'May 2018 - Present',
		section_link: "#GailBot",
		section: "GailBot"
	},
	{
		name:  'NextGen Alert System',
		keywords: "Python, React, Kibana, ElasticSearch",
		affiliation: 'Tufts Technology services',
		dates: 'Oct 2020 - Present',	
		section_link: "#NextGen",
		section: "NextGen"
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
									<li>Develop an automated Speech To Text (STT) system able 
									to transcribe para-linguistic features of conversation, such as 
									prosody, intonation, and laughter, to reduce 
									transcription time and bottleneck.</li>
									<li>Conversation Analysis (CA), HRI, and CBS require 
									a detailed transcription tool to study human
									interaction.</li>
									<li>Abstract the data collection process to 
									allow researchers to conduct higher level analysis.</li>
									<li>No existing transcription system that produces 
									highly accurate CA style transcriptions with a multi-language
									and highly customizable transcription model.</li>
								</ul>
								Role:
								<ul>
									<li> Lead developer on the project responsible 
									for design, implementation, documentation, and 
									distribution of the system.
									</li>
									<li>Developed novel statistical and machine learning 
									models to determine prosody, laughter, and 
									relative speech rate between speakers. 
									</li>
									<li> Collaborated with graduate students at Tufts 
									in CBS, HRI, and HI and recruited undergraduates 
									as interns to the development team.
									</li>
									<li>Finalized and submitted a research paper, <a href="https://osf.io/ap4s7/" target="_blank" rel="noreferrer">
									 GailBot: An automated transcription system for 
									conversation analysis</a>
									, to the <a href="http://www.dialogue-and-discourse.org/" target="_blank" rel="noreferrer">Dialogue and 
									Discourse (D&D) journal.</a> This paper is still 
									in peer review.</li>
									<li>Presented GailBot at the <a href="https://amlap2020.org/" target="_blank" rel="noreferrer"> AMLAP Conference 2020 
									</a> as a poster presentation.</li>
								</ul>
								Technical details:
								<ul>
									<li>Version 2 supports multi-language 
									and acoustic custom STT models.</li>
									<li>Supports various post-processing 
									modules including laughter detection, 
									speech rate detection, and overlaps.</li>
									<li>Uses distributed processing to process 
									utpo 1000 conversations in parallel.</li>
									<li>Currently only available as a command 
									line tool</li>
								</ul>
								Future goals:
								<ul>
									<li>Version 3 of GailBot is currently under 
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
									</a> - Miscommunication, Repair, and statistical modelling lead.<br/>
										Special thanks to Julia for her amazing work on GailBot, without which
										the project would not be possible.
							
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
										AMLAP 2020 presentation by Julia Mertens
									</a> 
									</li>
									<li><a href="https://sites.tufts.edu/hilab/" target="_blank" rel="noreferrer">
										Human Interaction Lab at Tufts University
									</a> 
									</li>
								</ul>
								<br></br>
								<ReactPlayer url="https://youtu.be/8dRXdPs5wRU"/>
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
								Motivation:
								<ul>
									<li>TTS requires an open source, non-comercially supported 
									log management and security information and event management 
									(SIEM) solution as an alternative to paid services.</li>
									<li>A system is required to provide real-time 
									visaluzation, reporting, and alerting of Tufts university 
									data clusters.</li>
									<li>A user interaction layer is required to abstract 
									specific cluster endpoints from users such that they 
									can create arbritarily complex alerting queries and 
									recieve alerts through pre-defined mediums.</li>
									<li>This project is conducted as part of the 
									Senior Capstone requirement in the Computer Science 
									department at Tufts university.</li>
								</ul>
								Role:
								<ul>
									<li>Full stack developer primarily focused
									on backend development.</li>
									<li>Designed back-end to accomodate multiple 
									web-frameworks, endpoints (such as ElasticSearch 
									and Kibana), and alerting mediums.
									</li>
									<li>Presented Minimum Viable Product (MVP) 
									as functional and meeting all basic user requirements.</li>
								</ul>
								Technical details:
								<ul>
									<li>Technical details are not publically 
									available. Please reach out for more information.</li>
								</ul>
								Future goals:
								<ul>
									<li>Present a fully capable version of the 
									system by May 2021 to Tufts Technology Services (TTS).</li>
									<li>Incorporate machine learning techniques 
									for trend prediction in data clusters.</li>
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
				
				
			</div>
		)
	}
}