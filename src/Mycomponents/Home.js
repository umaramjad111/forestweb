import React from 'react'
import About from './About'
import Services from './Services'
import Navbar from './Navbar';
import Gallary from './Gallary'
import Contact from './Contact'
export default function Home() {
    return (
        <div id="home" >
            
            <About/>
            <Services/>
            <Gallary/>
            <Contact/>

        </div>
    )
}
