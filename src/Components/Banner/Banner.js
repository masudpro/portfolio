import { Box, Button, Container, Link } from '@material-ui/core';
import React from 'react';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';

const Banner = () => {
  
    return (
        <div id="top" className="banner">
                <div  className="bannerContent">
 
        <Box p={1} >
        <Container maxWidth="lg" >
            <h1>Hi</h1>
            <h1>I am Masud Rana</h1>
        
        <ReactTypingEffect
                text={["Front End React Developer", "Wordpress Expert"]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                return (
                    <h1>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                            
                        >{char}</span>
                        );
                    })}
                    </h1>
                );
                }}        
      />
      <br/>
      <Link mt={5} className="customButton" href="https://drive.google.com/u/0/uc?id=1_vURpGBlAe0mR_eSpM21AlrvYyyltebL&export=download" >
    DOWNLOAD CV
  </Link>
  
       </Container>
      </Box>
          
            </div>

            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
        
        </div>
    );
};

export default Banner;