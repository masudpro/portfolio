import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core';
import masudImage from '../Image/masud.png'
import rotationImg from '../Image/footer-bg.png'

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

export default function About() {
  const classes = useStyles();

  return (
    <section id="about" className="aboutSec" >
      <br/>
      <Container className={classes.root}>
      <Grid container pt-xs={5} spacing={3} >
        <Grid  item md={6}>
         <div className="aboutMePhoto">
            <div className="aboutPhoto">
               <img src={masudImage} alt=""/>
             </div>
         </div>

        </Grid>
        <Grid item md={6}>
          <div className="aboutMeContent">
            <h1>Hello, This is Masud Rana</h1>
            <p>I am a professional Front End Developer (react.js), Wordpress expert and shopify expert. To make a web application using react.js , the most challenging subject is errors free code.Responsiveness is Very important of any kind of website. Because everyone don't use same device. I will create a creative website for you and it will be 100% responsive all device and works perfectly on Desktop and Mobile devices and other device like Tablets and smart phones. I can make any kind of website that will be attractive, modern & Eye-catching Design. </p>
            <Link mt={5} className="customButton" href="#" >
            Message Me
          </Link>
          </div>
        </Grid>
      
      </Grid>
    </Container>
    </section>
  );
}
