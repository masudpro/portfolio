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
        <Grid container spacing={3} className="">
            <Grid  item  md={6}>
                <div className="singleBlog">
                    <Grid container spacing={3} className="">
                        <Grid  item sm={6} >
                            <img src={blogImage} alt=""/>
                        </Grid>
                        <Grid  item sm={6} >
                            <h1>Lorem ipsum dolor </h1>
                            <p>sit amet, consectetur adipisicing elit. A quos similique omnis facilis vel mollitia nemo fugit quisquam consectetur, aut fuga dolor maxime praesentium quo, consequatur nam exercitationem incidunt est. <Link href="#" > More </Link> </p>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <Grid  item  md={6}>
                <div className="singleBlog">
                    <Grid container spacing={3} className="">
                        <Grid  item sm={6} >
                            <img src={blogImage} alt=""/>
                        </Grid>
                        <Grid  item sm={6} >
                            <h1>Lorem ipsum dolor </h1>
                            <p>sit amet, consectetur adipisicing elit. A quos similique omnis facilis vel mollitia nemo fugit quisquam consectetur, aut fuga dolor maxime praesentium quo, consequatur nam exercitationem incidunt est. <Link href="#" > More </Link> </p>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <Grid  item  md={6}>
                <div className="singleBlog">
                    <Grid container spacing={3} className="">
                        <Grid  item sm={6} >
                            <img src={blogImage} alt=""/>
                        </Grid>
                        <Grid  item sm={6} >
                            <h1>Lorem ipsum dolor </h1>
                            <p>sit amet, consectetur adipisicing elit. A quos similique omnis facilis vel mollitia nemo fugit quisquam consectetur, aut fuga dolor maxime praesentium quo, consequatur nam exercitationem incidunt est. <Link href="#" > More </Link> </p>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <Grid  item  md={6}>
                <div className="singleBlog">
                    <Grid container spacing={3} className="">
                        <Grid  item sm={6} >
                            <img src={blogImage} alt=""/>
                        </Grid>
                        <Grid  item sm={6} >
                            <h1>Lorem ipsum dolor </h1>
                            <p>sit amet, consectetur adipisicing elit. A quos similique omnis facilis vel mollitia nemo fugit quisquam consectetur, aut fuga dolor maxime praesentium quo, consequatur nam exercitationem incidunt est. <Link href="#" > More </Link> </p>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        
            
            
        
        </Grid>
        </Container>
    </section>
  );
}
