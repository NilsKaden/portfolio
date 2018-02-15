import React from 'react';
import {render} from 'react-dom';
import picture from '../images/profilbild.jpg';
import AboutText from './AboutText';

class About extends React.Component{
	render() {
		return(
			<div className="About">
				<div className="pure-g">
    			<div className="pure-u-1 pure-u-sm-1-2">
    				<img src={picture} className="pure-img portrait" alt="portrait" />
    			</div>
    			<div className="pure-u-1 pure-u-sm-1-2">
    				<AboutText/>
    			</div>
				</div>
			</div>
		)
	}
}

export default About;