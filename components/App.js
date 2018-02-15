import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import About from './About';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
