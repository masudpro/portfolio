import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core';
import emailjs from 'emailjs-com';
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







// daynimic email

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('),I$masud#raNa&375170@.', 'template_jq6uo7p', e.target, 'user_sOZW1jKFLRL3D2AE6i7ge')
      .then((result) => {
        alert('Thank You Form Message Me. I will contact You soon.');
          document.getElementById('email').value = '';
          document.getElementById('name').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }







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
            <Grid item xs={12}>
              <div className="contactSocial">
                <ul>
                  <li><a target="_blank" href="https://www.facebook.com/masudpro1"> <i className="fa fa-facebook"></i> </a></li>
                  <li><a target="_blank" href="https://twitter.com/masudpro"><i className="fa fa-twitter"></i> </a></li>
                  <li><a target="_blank" href="https://github.com/masudpro"><i className="fa fa-github"></i></a></li>
                  <li><a target="_blank" href="https://www.linkedin.com/in/masudpro/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a target="_blank" href="https://medium.com/@masudrana115353"><i class="fa fa-medium"></i></a></li>
                          
                </ul>
              </div>
              
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <div className="contactContent">
			<h1>MD Masud Rana</h1>

			<h2><span><i class="fa fa-map-marker"></i></span> Address</h2>
      <div className="contactInfo">
        <p>Ajgora,Belkuchi</p>
        <p>Sirajganj, Bangladesh</p>
      </div>
      <h2><span><i class="fa fa-envelope"></i></span>  Email</h2>
      <div className="contactInfo">
        <p>masudrana375176@gmail.com</p>
      </div>
      <h2><span><i class="fa fa-phone-square"></i></span>  Mobile </h2>
      <div className="contactInfo">
        <p>+8801759741129</p>
        <p>+8801824375176</p>
      </div>
	        	</div>
                </Grid>
                
                <Grid item xs={12} md={7} lg={8}>
                <div className="contact-form">

                <form  onSubmit={sendEmail}>
                  <input id="name" type="text" name="name" placeholder="Your Name" />
                  <input id="email" type="email" name="email" placeholder="yourmail@gmail.com" />
                  <input id="subject" type="text" name="subject" placeholder="put a subject" />
                  <textarea id="message" type="text" name="message" placeholder="Message"/>
                  <input className="submitButton" type="submit" value="Send" />
                </form>

                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="copyRight">
                      <p>Designed and developed by Masud Rana.All Rights Reserved by masudpro. </p>
                    </div>
                </Grid>
            </Grid>
        </Container>
   </section>
  );
}
