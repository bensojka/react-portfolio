import React, { Component } from 'react';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar navbar-default">
          <div className="container-fluid navbar-custom">
            <div className="row">
              <div className="navbar-header">
                <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="col-xs-12 phone-nav">
                  <p className="navbar-brand">BEN SOJKA</p>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right navbar-right-custom">
                  <li><p>Contact</p></li>
                  <li><p>Portfolio</p></li>
                  <li><p>About</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="about-me-content">
                  <h1 className="about-me-header">About Me</h1>
                  <p>I am both a Full Stack Web Developer and Project Manager available for hire in Austin, TX. I am dedicated to using programming best practices while creating the highest quality web applications for my clients. Check out some of my work on my Portfolio page. Feel free to reach out to me directly by email at bensojka@gmail.com or connect with me on one of my social media pages.</p>
                  <p>My developer skills include HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, Node.js, React.js, MongoDB, MySQL, Git, Python, Database Theory, and the Command Line. I am constantly working to increase my programming knowledge and abilities. I am extremely coachable when it comes to learning new languages, frameworks, and techniques.</p>
                  <p>As a Project Manager I have successfully managed over three million dollars worth of construction materials spanning over 40 different jobsites nationwide. I am highly proficient in Microsoft Office and working with ERP systems. I am aiming to leverage my strategic, operational and fiscal leadership abilities with my passion for coding at a job that maximizes all facets of my unique skillset.</p>
                </div>
              </div>
              <div className="col-md-4">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
