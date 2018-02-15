import React from 'react';
import ProgressBar from './ProgressBar';

class AboutText extends React.Component{
	render() {
		return(
			<div className="AboutText">
				<h1>Hi, I'm Nils!</h1>
				<h2>I started programming at the age of 15 and haven't stopped since!</h2>
				<h2>I'm currently living in Lüneburg, Germany.</h2>

				<h2>My Skills include:</h2>
				<ProgressBar />
			</div>
		)
	}
}

export default AboutText;