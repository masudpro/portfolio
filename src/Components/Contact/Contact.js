import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core';
import masudranaImage from '../Image/masudrana.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
   <section id="contact" className="contactSec">
        <Container >
        <div className="custom-heading"  >
                <h1>Contact Me</h1>
                <div className="custom-heading-shadow">
                    <h1>Always Active</h1>
                </div>
            </div>
            <br/>
            <Grid container spacing={3} >
                <Grid  item xs={12} md={6}>
                <div className="contactContent">
                <img src={masudranaImage} alt=""/>
			<h1>MD Masud Rana</h1>
			<h2>Ajgora,Belkuchi</h2>
			<h2>Sirajganj, Bangladesh</h2>
			<h2>Phone: +8801759741129</h2>
			<h2>Skype: masudprobd</h2>
			<h2>Gmail: masudrana375176@gmail.com</h2>
			<ul>
				<li><a target="_blank" href="https://www.facebook.com/masudpro1"> <i className="fa fa-facebook"></i> </a></li>
				<li><a target="_blank" href="https://twitter.com/masudpro"><i className="fa fa-twitter"></i> </a></li>
				<li><a target="_blank" href="https://www.behance.net/masudpro"><i className="fa fa-github"></i></a></li>
				<li><a target="_blank" href="https://www.linkedin.com/in/masudpro/"><i className="fa fa-linkedin"></i></a></li>
				<li><a target="_blank" href="https://www.instagram.com/masudprobd/"><i className="fa fa-instagram"></i></a></li>
                
			</ul>
			
	        	</div>
                </Grid>
                <Grid item  item xs={12} md={6}>
                <div className="contact-form">
                        <form>
                            <div className="form-group">
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                              </div>
                            <div className="form-group">
                              <select className="form-control custom-select mr-sm-2" id="exampleFormControlSelect1">
                                  <option className="selected">Select Your Service</option>
                                <option>Web Design</option>
                                <option>Web Design</option>
                                <option>Web Development</option>
                                <option>Graphics Design</option>
                                <option>Video Editing</option>
                                <option>Digital marketing </option>
                                <option>Seo</option>
                                <option>Others</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <Link mt={5} className="customButton" href="" >Send Me </Link>
  
                          </form>
                    </div>
                </Grid>
            </Grid>
        </Container>
   </section>
  );
}
