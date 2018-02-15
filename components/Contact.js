import React from 'react';
import {render} from 'react-dom';
import Header from './Header';

class Contact extends React.Component{
render() {
	return(
    <div className="App">
      <Header />
        <div className="Contact">
          <div className="pure-g">
            <div className="pure-u-1">
              <h1>I'm available for freelance work.</h1>
            </div>

            <div className="pure-u-1-3">
              <p/><i className="fas fa-envelope fa-7x"></i>
              <a href="mailto:nils.kaden@me.com" target="_top">Send Mail</a><p/>
            </div>

            <div className="pure-u-1-3">
              <p/><i className="fab fa-github fa-7x"></i>
              <a href="https://github.com/NilsKaden">Github</a><p/>
            </div>

           <div className="pure-u-1-3">
              <i class="fab fa-twitter fa-7x"></i>
              <a href="https://twitter.com/intent/tweet?screen_name=Anadox&ref_src=twsrc%5Etfw" className="twitter-mention-button" data-show-count="false">Tweet to @Anadox</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Contact;Y