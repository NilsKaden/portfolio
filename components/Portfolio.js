  import React from 'react';
  import Header from './Header';
  import sample_app from '../images/sample_app.PNG';
  import catch_of_the_day from '../images/catch_of_the_day.PNG';
  import newsletter from '../images/newsletter.PNG'
  import Footer from './Footer';

  class Portfolio extends React.Component{
  	render() {
  		return(
  			<div className="App">
        <Header />
        <div className="Portfolio">
        <div className="pure-g">
        <div className="pure-u-1"><h1>Have a look at my projects!</h1></div>
        </div>


        <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-7-12"><img src={catch_of_the_day} className="pure-img screenshot" alt="sample_app screenshot" /></div>
        <div className="pure-u-1 pure-u-sm-5-12">
        <h3>React realtime store with OAuth, Firebase etc.</h3>
        <a href="https://github.com/NilsKaden/reactjs-tutorial-app-using-firebase-oauth-etc.-by-wes-bos">GitHub</a><p/>
        <a href="https://reactforbeginners.com/">Tutorial by Wes Bos</a>
        </div>
        </div>

        <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-7-12"><img src={sample_app} className="pure-img screenshot" alt="sample_app screenshot" /></div>
        <div className="pure-u-1 pure-u-sm-5-12">
        <h3>Ruby on Rails Sample App</h3>
        <h3>Twitter clone using Rails' Microposts, ActionMailer, Auth, Cookies etc.</h3>
        <a href="https://aqueous-dawn-33592.herokuapp.com/">Check it out on Heroku!</a><p/>
        <a href="https://github.com/NilsKaden/sampleApp">GitHub</a><p/>
        <a href="https://www.railstutorial.org/book">Tutorial by Michael Hartl</a>
        </div>
        </div>

        <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-7-12"><img src={newsletter} className="pure-img screenshot" alt="sample_app screenshot" /></div>
        <div className="pure-u-1 pure-u-sm-5-12">
        <h3>Ruby on Rails newsletter app using Sendgrid and Heroku-Scheduler</h3>
        <a href="https://github.com/NilsKaden/fruehstartermail">GitHub</a><p/>
        </div>
        </div>

        <Footer />

        </div>
        </div>
        )
  	}
  }

  export default Portfolio;