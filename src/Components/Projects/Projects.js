import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core';
import projectOne from '../Image/project (1).png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <section id="project"> 
        <Container className={classes.root}>
        <div className="custom-heading"  >
            <h1>Recent Project</h1>
            <div className="custom-heading-shadow">
                <h1>My Expericence</h1>
            </div>
         </div>
         <br/>
      <Grid   container  spacing={3} >
        <Grid  item sm={6} md={4} >
          <div className="projectContent" >
              <img src={projectOne} alt=""/>
              <div className="projectDesc">
                <h3>Creative Agency</h3>
                <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
                <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
                <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
                <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
              </div>
          </div>
        </Grid>
        <Grid  item sm={6} md={4} >
          <div className="projectContent" >
              <img src={projectOne} alt=""/>
              <div className="projectDesc">
                <h3>Creative Agency</h3>
                <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
                <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
                <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
                <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
              </div>
          </div>
        </Grid>
        <Grid  item sm={6} md={4} >
          <div className="projectContent" >
              <img src={projectOne} alt=""/>
              <div className="projectDesc">
                <h3>Creative Agency</h3>
                <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
                <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
                <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
                <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
              </div>
          </div>
        </Grid>
        <Grid  item sm={6} md={4} >
          <div className="projectContent" >
              <img src={projectOne} alt=""/>
              <div className="projectDesc">
                <h3>Creative Agency</h3>
                <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
                <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
                <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
                <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
              </div>
          </div>
        </Grid>
        <Grid  item sm={6} md={4} >
          <div className="projectContent" >
              <img src={projectOne} alt=""/>
              <div className="projectDesc">
                <h3>Creative Agency</h3>
                <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
                <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
                <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
                <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
              </div>
          </div>
        </Grid>
        <Grid  item sm={6} md={4} >
          <div className="projectContent" >
              <img src={projectOne} alt=""/>
              <div className="projectDesc">
                <h3>Creative Agency</h3>
                <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
                <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
                <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
                <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
              </div>
          </div>
        </Grid>
      </Grid>
    </Container>
    </section>
  );
}
