import React, { useState } from 'react'
import Content from '../components/Content'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Content/Data'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import SideBar from '../components/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Hero />
            <Content {...homeObjOne}/>
            <Content {...homeObjTwo}/>
            <Services />
            <Content {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
