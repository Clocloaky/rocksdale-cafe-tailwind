import React from 'react'
import Signup from "../components/Signup";
import Hero from "../components/Hero";
import Info from "../components/Info";
import About from "../components/About";
import Register from '../components/Register';

const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <About />
            <Register />
        </>
    )
}

export default Home