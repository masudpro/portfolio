import React from 'react';
import { Container, Grid } from '@material-ui/core';




export default function Projects() {
  return (
    <section id="project"> 
       <Container>
        <div className="custom-heading"  >
             <h1>Recent Project</h1>
             <div className="custom-heading-shadow">
                 <h1>My Expericence</h1>
             </div>
         </div>
        <br/>
        <Grid container spacing={3} >
          <Grid  item md={6}>
            <div className="singleProject">
              <div className="projectContent">
                  <h1>Creative Agency</h1>
                  <div className="projectLink">
                    <h1><a target="_blank" href="https://august-cascade-220007.web.app/"><i className="fa fa-globe"></i> <span>Live View </span> </a> </h1>

                    <h1><a target="_blank" href="https://github.com/masudpro/agency-client"><i className="fa fa-github"></i> <span>See Code </span> </a> </h1>
                  </div>
                  <p><strong>Features</strong> : Customer or visitor can chose courses and Order that curses by a form. Customer can also write feedback about that purchased courses. At Admin Panel Add can upload new courses and delete old courses, accept order and also add new admin</p>

                  <p><strong>Technology</strong> : HTML 5, CSS3, Javascript, Bootstrap, Rect JS, Node Js, Express , Context Api ,Github, Firebase, Mongodb, Heruku</p>
              </div>
            </div>

            <div className="singleProject">
              <div className="projectContent">
                  <h1>It Agency </h1>
                  <div className="projectLink">
                    <h1><a target="_blank" href="http://masudpro.com/shikhbeshobai.com/"><i className="fa fa-globe"></i> <span>Live View </span> </a> </h1>

                    {/* <h1><a target="_blank" href="https://github.com/masudpro/agency-client"><i className="fa fa-github"></i> <span>See Code </span> </a> </h1> */}
                  </div>
                  <p><strong>Features</strong> : Visitor can know about there courses, About students number also know about mentor . In course details course's curriculum , Can contact and booking courses. At footer section show the daily visitor's number </p>

                  <p><strong>Technology</strong> : HTML 5, CSS3, Javascript, Bootstrap, Php, Mysql, Wordpress</p>
              </div>
            </div>

            <div className="singleProject">
              <div className="projectContent">
                  <h1>Music Station</h1>
                  <div className="projectLink">
                    <h1><a target="_blank" href="https://masudpro.github.io/hard-rock-master/"><i className="fa fa-globe"></i> <span>Live View </span> </a> </h1>

                    <h1><a target="_blank" href="https://github.com/masudpro/hard-rock-master"><i className="fa fa-github"></i> <span>See Code </span> </a> </h1>
                  </div>
                  <p><strong>Features</strong> : Music Lover Can Find Music and enjoy by searching and also enjoy that music. If music lover want Lyrics , just get full lyrics by pressing get lyrics button</p>

                  <p><strong>Technology</strong> : HTML 5, CSS3, , Bootstrap, Rect JS, Context Api, Github</p>
              </div>
            </div>
          </Grid>

          <Grid  item md={6}>
            <div className="singleProject">
              <div className="projectContent">
                  <h1>Hotel Booking</h1>
                  <div className="projectLink">
                    <h1><a target="_blank" href="https://kind-montalcini-cf88e3.netlify.app/"><i className="fa fa-globe"></i> <span>Live View </span> </a> </h1>

                    <h1><a target="_blank" href="https://github.com/masudpro/online-hotel-booking"><i className="fa fa-github"></i> <span>See Code </span> </a> </h1>
                  </div>
                  <p><strong>Features</strong> : Customer or visitor can chose a place and booking that place for refreshment or any purpose . For Booking Customer must be login his/her google account or create a new account</p>

                  <p><strong>Technology</strong> : HTML 5, CSS3, Javascript, Bootstrap, Rect JS, Node Js, Express , Context Api ,Github, Firebase, Mongodb, Heruku</p>
              </div>
            </div>

            <div className="singleProject">
              <div className="projectContent">
                  <h1>Non Profit Volunteer</h1>
                  <div className="projectLink">
                    <h1><a target="_blank" href="https://volunteer-77015.web.app/"><i className="fa fa-globe"></i> <span>Live View </span> </a> </h1>

                    <h1><a target="_blank" href="https://github.com/masudpro/volunteer-client"><i className="fa fa-github"></i> <span>See Code </span> </a> </h1>
                  </div>
                  <p><strong>Features</strong> : Great Persons want to work for poor people, It's the awesome website for their. Every one can chose a work and for confirm the have to login with google account and booking that work . One person can chose ones more work , set this/her time as he/she want. </p>

                  <p><strong>Technology</strong> : HTML 5, CSS3, Javascript, Bootstrap, Rect JS, Node Js, Express , Context Api ,Github, Firebase, Mongodb, Heruku</p>
              </div>
            </div>

            <div className="singleProject">
              <div className="projectContent">
                  <h1>News Paper</h1>
                  <div className="projectLink">
                    <h1><a target="_blank" href="http://masudpro.com/newspaper/"><i className="fa fa-globe"></i> <span>Live View </span> </a> </h1>

                    {/* <h1><a target="_blank" href="https://github.com/masudpro/hard-rock-master"><i className="fa fa-github"></i> <span>See Code </span> </a> </h1> */}
                  </div>
                  <p><strong>Features</strong> : People can reed news easily. They can also find any news by search option .Every news have published date . Feature news is shown at the t and most views news show at the bottom</p>

                  <p><strong>Technology</strong> :  Wordpress</p>
              </div>
            </div>
          </Grid>
          
     
        </Grid>
        </Container>
    </section>
  );
}

