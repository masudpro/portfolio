import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core';
import blogImage from '../Image/blog (1).jpg'
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

export default function Blog() {
  const classes = useStyles();

  return (
    <section id="blog" className="blogSec">
        <Container className={classes.root}>
            <div className="custom-heading"  >
                <h1>Recent Blog</h1>
                <div className="custom-heading-shadow">
                    <h1>My Research</h1>
                </div>
            </div>
            <br/>
        <Grid container spacing={3}>
            <Grid  item  md={4}>
                <div className="singleBlog">
                    <div className="blogContent">
                        <h1>Why context API is better than Redux?</h1>
                        <p>According to me, the main advantage of Context API over Redux is that instead of importing actions and using them we get to manipulate the state directly on the component we are currently on. Context API is also easy to set up and is as effective as Redux.<Link target="_blank" href="https://medium.com/@masudrana115353" > More </Link> </p>
                    </div>
                </div>
            </Grid>
            <Grid  item  md={4}>
                <div className="singleBlog">
                    <div className="blogContent">
                        <h1>What is react JS for beginners?</h1>
                        <p>React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.<Link target="_blank" href="https://medium.com/@masudrana115353" > More </Link> </p>
                    </div>
                </div>
            </Grid>
            <Grid  item  md={4}>
                <div className="singleBlog">
                    <div className="blogContent">
                        <h1>What should I learn before ReactJS?</h1>
                        <p> HTML and CSS. Every front end developer starts their journey with HTML and CSS,JSX (Javascript XML) and Babel. In React you will work with JSX that looks like HTML and you can consider it like HTML-flavored JavaScript, Fundamentals of Javascript and ES6, Package Manager (Node + Npm), Git and CLI (Command Line Interface)<Link target="_blank" href="https://medium.com/@masudrana115353" > More </Link> </p>
                    </div>
                </div>
            </Grid>
            
           
        </Grid>
        </Container>
    </section>
  );
}
