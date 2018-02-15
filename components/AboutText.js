import React from 'react';
import {render} from 'react-dom';
import ProgressBar from './ProgressBar';

class AboutText extends React.Component{
	render() {
		return(
			<div className="AboutText">
				<h1>Hi, I'm Nils!</h1>
				<p>I started programming at the age of 15 and haven't stopped since!</p>
				<p>I'm currently living in Lüneburg, Germany.</p>

				<h2>My Skills include:</h2>
				<ProgressBar />
			</div>
		)
	}
}

export default AboutText;