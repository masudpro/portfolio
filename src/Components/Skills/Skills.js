import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Container, Grid } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);





const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Skills() {
  const classes = useStyles();

  return (
    <section id="skill">
        <Container className={classes.root}>
        <div className="custom-heading"  >
                <h1>My Skills</h1>
                <div className="custom-heading-shadow">
                    <h1>Strength</h1>
                </div>
            </div>
            <Grid container pt-xs={5} spacing={3} >
        <Grid  item xs={12} md={6}>
        <h1>Html</h1> <BorderLinearProgress variant="determinate" value={100} />
        <h1>Css</h1> <BorderLinearProgress variant="determinate" value={100} />
       <h1>Javascript</h1> <BorderLinearProgress variant="determinate" value={92} />
       <h1>React.js</h1> <BorderLinearProgress variant="determinate" value={90} />
        <h1>Node.js</h1> <BorderLinearProgress variant="determinate" value={75} />
        <h1>Context Api</h1> <BorderLinearProgress variant="determinate" value={75} />
    
       </Grid>
       <Grid  item xs={12} md={6}>
       <h1>Mongobd</h1> <BorderLinearProgress variant="determinate" value={70} />
        <h1>Express</h1> <BorderLinearProgress variant="determinate" value={72} />
       <h1>Php</h1> <BorderLinearProgress variant="determinate" value={82} />
       <h1>mysql</h1> <BorderLinearProgress variant="determinate" value={80} />
        <h1>Firebase</h1> <BorderLinearProgress variant="determinate" value={71} />
        <h1>Heroku</h1> <BorderLinearProgress variant="determinate" value={70} />
       </Grid>
      
      </Grid>
   </Container>
    </section>
  );
}
