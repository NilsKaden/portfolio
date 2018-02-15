import React from 'react';
import '../css/ProgressBar.css';


class ProgressBar extends React.Component{
	render() {
		return(
			<div className="ProgressBar">
				<p>Ruby on Rails</p>
		    <div class="progressbar progressbar-ror">
		        <div class="progressbar-inner"></div>
		    </div>

		    <p>React</p>
		    <div class="progressbar progressbar-react">
		        <div class="progressbar-inner"></div>
		    </div>

		    <p>HTML & CSS</p>
		    <div class="progressbar progressbar-htmlcss">
		        <div class="progressbar-inner"></div>
		    </div>
		    
		    <p>PHP</p>
		    <div class="progressbar progressbar-php">
		        <div class="progressbar-inner"></div>
		    </div>

		    <p>Objective-C & iOS - Development</p>
		    <div class="progressbar progressbar-objc">
		        <div class="progressbar-inner"></div>
		    </div>

		    <p>C & C++</p>
		    <div class="progressbar progressbar-cplusplus">
		        <div class="progressbar-inner"></div>
		    </div>
		  </div>
		)
	}
}

export default ProgressBar;