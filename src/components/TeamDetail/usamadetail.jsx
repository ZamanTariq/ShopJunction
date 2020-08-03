import React, { Component } from "react";

class ZamanDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div id="about" class="container">
          <img className="img-set" src="/usama.jpg"></img>
          <h1 className="display-4 name-cen">Usama Munir</h1>
          <p>
            I’m a full-stack web developer with over 16 years of experience.
            Software development is a fulfilling and rewarding job for me. I
            love to execute big ideas, and I want to use my talents to solve
            problems and make life easier for people. I jump at the chance to
            learn new things. I take great pride in my work and the fact that I
            create things that others find useful.
          </p>
          <p>
            <strong>Skills:</strong>
            <span class="badge badge-info">Bootstrap</span>
            <span class="badge badge-info">Ruby</span>
            <span class="badge badge-info">Python</span>
            <span class="badge badge-info">HTML</span>
            <span class="badge badge-info">CSS</span>
            <span class="badge badge-info">JavaScript</span>
            <span class="badge badge-info">Node.js</span>
            <span class="badge badge-info">Polymer.js</span>
            <span class="badge badge-info">SQL</span>
          </p>
        </div>

        <section id="experience" class="container">
          <h1 className="tp-bm">Experience</h1>
          <div class="card">
            <div
              class="card-header collapse show"
              data-toggle="collapse"
              data-target="#exp1"
            >
              <div class="row">
                <h5 class="col-md-8 mb-0">Contract Web Developer</h5>
                <em class="col-md-4 text-md-right">Apr 2012 - Current</em>
              </div>
            </div>
            <div class="card-block collapse" id="exp1">
              <h5>Ben Davis Digital - Dallas, TX</h5>
              <p>
                Leveraged agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
                Brought to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                Capitalized on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-header" data-toggle="collapse" data-target="#exp2">
              <div class="row">
                <h5 class="col-md-8 mb-0">Senior Developer</h5>
                <em class="col-md-4 text-md-right">Sep 2008 - Apr 2012</em>
              </div>
            </div>
            <div class="card-block collapse" id="exp2">
              <h5>Farstar - Frisco, TX</h5>
              <p>
                Leveraged agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
                Brought to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                Capitalized on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header" data-toggle="collapse" data-target="#exp3">
              <div class="row">
                <h5 class="col-md-8 mb-0">Project Manager, CMS Team Lead</h5>
                <em class="col-md-4 text-md-right">Jan 2005 - Sep 2008</em>
              </div>
            </div>
            <div class="card-block collapse" id="exp3">
              <h5>New Media Gateway - Dallas, TX</h5>
              <p>
                Leveraged agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
                Brought to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                Capitalized on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header" data-toggle="collapse" data-target="#exp4">
              <div class="row">
                <h5 class="col-md-8 mb-0">Total Newb Developer</h5>
                <em class="col-md-4 text-md-right">Jul 2000 - Jan 2005</em>
              </div>
            </div>
            <div class="card-block collapse" id="exp4">
              <h5>Various Companies - Midwest United States</h5>
              <p>
                Leveraged agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
                Brought to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                Capitalized on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </div>
        </section>

        <section class="container" id="contact">
          <h1 className="tp-bm">Contact</h1>
          <div class="row">
            <div class="col-sm-2">Phone:</div>
            <div class="col-sm-4">972-415-6277</div>
          </div>
          <div class="row">
            <div class="col-sm-2">Email:</div>
            <div class="col-sm-4">
              <a href="mailto:ben@bendavisdigital.com">
                ben@bendavisdigital.com
              </a>
            </div>
          </div>
          <div class="row btm-mar">
            <div class="col-sm-2">LinkedIn:</div>
            <div class="col-sm-4">
              <a href="https://linkedin.com/in/bendavis78">
                linkedin.com/in/bendavis78
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ZamanDetail;
