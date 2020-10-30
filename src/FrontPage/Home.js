import React from 'react';
import About from '../Components/About/About';
import Banner from '../Components/Banner/Banner';
import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';

const Home = () => {
    return (
        <div>
           <Header></Header>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;