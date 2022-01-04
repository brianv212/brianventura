import React from 'react'
import './Home.css'
import Me from '../../images/me.png'
import {Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import CovidSim from '../../images/covidsim1.png'
import snoutbout from '../../images/snoutbout.png'
import CS171 from '../../images/ai.jpg'
import Resume from '../../images/resume.png'
import Live from '../../images/BrianVentura.pdf'

function Home () {
    return (
        <>
            <img src={Me} className="home-me" alt="Hello! It's me, Brian Ventura in Germany on a student exchange trip in 2018."/>
            <div className="home-container">
                <p className="home-bio">My name is Brian Ventura and I am a fourth year computer science major at UCI seeking a software engineering internship. 
                Learned about front end work around Summer of 2020 
                and fed that interest by building websites. I have experience with Javascript and
                ReactJS and incorporated different technologies such as Firebase and MongoDB
                to heighten my skills as an aspiring web developer. Thanks for stopping by!</p>
            </div>
            <Grid columns={3} doubling style={{margin: "0rem 3rem 1rem 3rem"}}>
                <Grid.Column>
                    <div className="projects-content">
                        <Link to="/brianventura/projects" style={{color: "white"}}>
                            <img src={CovidSim} alt="Covid-19 Simulator" class="projects-feature-img"/>
                            <div style={{margin: "0 1rem 1rem 1rem"}}>
                                <h4 style={{fontSize: "20px"}}>Projects</h4>
                                <h5 style={{color: "grey"}}>Past works and what I've been up to as of recently.</h5>
                            </div>
                        </Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="home-split-features-container" style={{paddingBottom: "0.5rem"}}>
                        <a href={Live} download="BrianVentura.pdf" style={{color: "white"}}>
                            <div className="home-split-features-content">
                                <img src={Resume} alt="Here's my resume"></img>
                                <div>
                                    <h4 style={{fontSize: "20px", margin: "0.5rem"}}>Resume</h4>
                                    <h5 style={{color: "grey", margin: "0.5rem"}}>Download my up to date resume</h5>
                                </div>                            
                            </div>
                        </a>
                    </div>
                    <div className="home-split-features-container" style={{paddingTop: "0.5rem"}}>
                        <Link to="/brianventura/classes" style={{color: "white"}}>
                            <div className="home-split-features-content">
                                <img src={CS171} alt="Here's some unwanted content"></img>
                                <div>
                                    <h4 style={{fontSize: "20px", margin: "0.5rem"}}>Classes</h4>
                                    <h5 style={{color: "grey", margin: "0.5rem"}}>Classes I've taken in college</h5>                      
                                </div>
                            </div>
                        </Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <a href="https://nmurashi.itch.io/snoutbout" target="_blank" rel="noreferrer" style={{color: "white"}}>
                            <img src={snoutbout} alt="Covid-19 Simulator" class="projects-feature-img"/>
                            <div style={{margin: "0 1rem 1rem 1rem"}}>
                                <h4 style={{fontSize: "20px"}}>Play SnoutBout! (PC Only)</h4>
                                <h5 style={{color: "grey"}}>A project created with the efforts of a team of six!</h5>
                            </div>
                        </a>
                    </div>
                </Grid.Column>
                {/* https://nmurashi.itch.io/snoutbout */}
            </Grid>
        </>
    )
}

export default Home