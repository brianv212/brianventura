import React from 'react'
import './Home.css'
import Me from '../../images/me.png'
import {Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import CovidSim from '../../images/covidsim1.png';
import CS171 from '../../images/ai.jpg'
import Resume from '../../images/resume.png'
import Live from '../../images/Brian_Ventura.pdf'

function Home () {
    return (
        <>
            <div className="home-container">
                <img src={Me} className="home-me" alt="Hello!"/>
                <p className="home-bio">My name is Brian Ventura and I am a fourth year computer science major at UCI seeking a software engineering internship. 
                Learned about front end work around Summer of 2020 
                and fed that interest by building websites. I have experience with Javascript and
                ReactJS and incorporated different technologies such as Firebase and MongoDB
                to heighten my skills as an aspiring web developer. Thanks for stopping by!</p>
            </div>
            <Grid columns={3} doubling style={{margin: "0rem 3rem 0rem 3rem"}}>
                <Grid.Column>
                    <div className="projects-content">
                        <Link to="/brianventura/projects" style={{color: "white"}}>
                            <img src={CovidSim} alt="Covid-19 Simulator"/>
                            <p style={{fontSize: "20px"}}>Projects</p>
                            <p style={{color: "grey"}}>See my past works and what I've been up to as of recently.</p>
                        </Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="home-split-features-container">
                        <a href={Live} download="Brian_Ventura.pdf" style={{color: "white"}}>
                            <div className="home-split-features-content">
                                <img src={Resume} alt="Here's my resume"></img>
                                <div>
                                    <p style={{fontSize: "20px", margin: "0.5rem"}}>Resume</p>
                                    <p style={{color: "grey", margin: "0.5rem"}}>Download my up to date resume.</p>
                                </div>                            
                            </div>
                        </a>
                    </div>
                    <div className="home-split-features-container">
                        <Link to="/brianventura/classes" style={{color: "white"}}>
                            <div className="home-split-features-content">
                                <img src={CS171} alt="Here's some unwanted content"></img>
                                <div>
                                    <p style={{fontSize: "20px", margin: "0.5rem"}}>Classes</p>
                                    <p style={{color: "grey", margin: "0.5rem"}}>Just a collection of classes I've taken in college</p>                      
                                </div>
                            </div>
                        </Link>
                    </div>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Home