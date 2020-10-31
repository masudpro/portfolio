// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { Container, Link } from '@material-ui/core';
// import projectOne from '../Image/project (1).png'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//   },
// }));

// export default function Projects() {
//   const classes = useStyles();

//   return (
//     <section id="project"> 
//         <Container className={classes.root}>
//         <div className="custom-heading"  >
//             <h1>Recent Project</h1>
//             <div className="custom-heading-shadow">
//                 <h1>My Expericence</h1>
//             </div>
//          </div>
//          <br/>
//       <Grid   container  spacing={3} >
//         <Grid  item sm={6} md={4} >
//           <div className="projectContent" >
//               <img src={projectOne} alt=""/>
//               <div className="projectDesc">
//                 <h3>Creative Agency</h3>
//                 <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
//                 <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
//                 <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
//                 <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
//               </div>
//           </div>
//         </Grid>
//         <Grid  item sm={6} md={4} >
//           <div className="projectContent" >
//               <img src={projectOne} alt=""/>
//               <div className="projectDesc">
//                 <h3>Creative Agency</h3>
//                 <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
//                 <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
//                 <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
//                 <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
//               </div>
//           </div>
//         </Grid>
//         <Grid  item sm={6} md={4} >
//           <div className="projectContent" >
//               <img src={projectOne} alt=""/>
//               <div className="projectDesc">
//                 <h3>Creative Agency</h3>
//                 <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
//                 <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
//                 <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
//                 <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
//               </div>
//           </div>
//         </Grid>
//         <Grid  item sm={6} md={4} >
//           <div className="projectContent" >
//               <img src={projectOne} alt=""/>
//               <div className="projectDesc">
//                 <h3>Creative Agency</h3>
//                 <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
//                 <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
//                 <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
//                 <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
//               </div>
//           </div>
//         </Grid>
//         <Grid  item sm={6} md={4} >
//           <div className="projectContent" >
//               <img src={projectOne} alt=""/>
//               <div className="projectDesc">
//                 <h3>Creative Agency</h3>
//                 <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
//                 <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
//                 <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
//                 <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
//               </div>
//           </div>
//         </Grid>
//         <Grid  item sm={6} md={4} >
//           <div className="projectContent" >
//               <img src={projectOne} alt=""/>
//               <div className="projectDesc">
//                 <h3>Creative Agency</h3>
//                 <span><strong>Features: </strong> Buy courses , Customer's eedback. Admin Panel</span>
//                 <span className="technology"><strong>Technologies: </strong> HTML 5, CSS3, Rect JS, Node Js, Express, Context, Github, Firebase, Mongodb, Heruku</span>
//                 <Link mt={5} className="projectBtn ProjectGithub" href="#" > Github </Link>
//                 <Link mt={5} className="projectBtn" href="#" > Live Website </Link>
//               </div>
//           </div>
//         </Grid>
//       </Grid>
//     </Container>
//     </section>
//   );
// }












// .projectContent{
//     box-shadow: 2px 2px 8px #0008;
//   }
//   .projectContent img{
//     width: 100%;
//    margin: 0px !important;
//    padding: 0px !important;
//    border-radius: 4px 4px 0px 0px;
  
    
//   }
  
  
//   .projectDesc{
//       transition: all .2s;
//       padding: 10px 15px 20px 15px;
//       margin-top: -5px;
//   }
  
//   .projectDesc:hover{
//     background: rgba(255,79,53,1);
//     background: -moz-linear-gradient(90deg, rgba(184,1,1,1) 0%, rgba(213,27,196,1) 35%, rgba(255,79,53,1) 100%);
//     background: -webkit-linear-gradient(90deg, rgba(184,1,1,1) 0%, rgba(213,27,196,1) 35%, rgba(255,79,53,1) 100%);
//     background: linear-gradient(90deg, rgba(184,1,1,1) 0%, rgba(213,27,196,1) 35%, rgba(255,79,53,1) 100%);
//     filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#b80101",endColorstr="#ff4f35",GradientType=1); 
//     animation: hue-rotate 5s linear infinite;
//     border-radius: 0px 0px 4px 4px;
//   }
//   .projectDesc h3{
//     margin-bottom: 10px;
//   }
  
//   .technology{
//     margin-top: 10px !important;
//     display: inline-block;
//   }
  
  
//   .projectBtn {
//      line-height: 30px;
//       height: 30px;
//       text-align: center;
//       width: 50%;
//       cursor: pointer;
//       color: #ffeae7 !important;
//       transition: all 0.5s;
//       position: relative;
//       display: inline-block;
//       margin-top: 20px !important;
//       box-shadow: 0px 0px 2px #000;
//   }
//   .ProjectGithub{
//     display: inline-block;
//     margin-right: 10px;
//   }
  
//   .projectBtn::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       z-index: 1;
//       background-color: #FF4F35;
//       transition: all 0.3s;
//       z-index: -1;
//   }
//   .projectBtn:hover::before {
//       opacity: 0 ;
//       transform: scale(0.5,0.5);
//   }
//   .projectBtn::after {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       z-index: 1;
//       opacity: 0;
//       transition: all 0.3s;
//       border: 1px solid #FF4F35;
//       transform: scale(1.2,1.2);
//   }
//   .projectBtn:hover::after {
//       opacity: 1;
//       transform: scale(1,1);
//   }
//   @keyframes hue-rotate {
//         from {
//           -webkit-filter: hue-rotate(0);
//           -moz-filter: hue-rotate(0);
//           -ms-filter: hue-rotate(0);
//           filter: hue-rotate(0);
//         }
//         to {
//           -webkit-filter: hue-rotate(360deg);
//           -moz-filter: hue-rotate(360deg);
//           -ms-filter: hue-rotate(360deg);
//           filter: hue-rotate(360deg);
//         }
//   }
  