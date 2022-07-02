import React from 'react'
import Signup from "../components/Signup";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Info from "../components/Info";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <About />
            <Signup />
        </>
    )
}

export default Home