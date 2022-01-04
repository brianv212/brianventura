import React from 'react'
import './Classes.css'

import CS121 from '../../images/information-retrieval.png'
import CS178 from '../../images/machine-learning.jpg'
import CS171 from '../../images/ai.jpg'
import CS122A from '../../images/data-management.jpg'
import INF131 from '../../images/hci.jpg'
import CS117 from '../../images/computer-vision.jpg'
import aws from '../../images/aws.jpg'
import snoutbout from '../../images/snoutbout.png'

import {Grid} from 'semantic-ui-react'

function Classes() {
    return (
        <>
            <h1 className="projects-title">Past Classes</h1>
            <Grid columns={4} doubling style={{margin: "0rem 3rem 0rem 3rem"}}>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={CS121} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            <h3>Information Retrieval</h3>
                            The Web contains so much that it'd make one wonder how they'd manage to store
                            information on the websites. Better yet, it makes people wonder how it is that
                            when we search for something, a certain selection of links are chosen in a certain
                            order. My information retrieval course taught me the basics on web search engines and how
                            they work - how they rank websites and how they go about retrieving that information. In
                            the end, I was able to create a mini search engine for UCI-related links.
                            <br/><h5>-June 2020</h5>
                        </p>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={CS178} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            <h3>Intro to Machine Learning</h3>
                            Probably one of the harder courses I've taken. Considering I've never never
                            really dealt with Machine Learning, there was definitely a lot to take in over the
                            Fall quarter (2020). Upon learning about many different ML techniques, the final
                            assignment for this class was to create a learner to compete in a Kaggle Competition.
                            <br/><h5>-December 2020</h5>
                        </p>
                        
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={CS171} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            <h3>Intro to AI</h3>
                            It's always interesting seeing how bots would perform against an actual player
                            in video games. How do people manage to get an AI to outperform humans? My intro
                            to Artificial Intelligence class helped me understand the basics of MCTS and a/b
                            pruning, which led to the creation of my own little AI that'd be able to go head to
                            head with above average players.
                            <br/><h5>-December 2020</h5>
                        </p>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={CS122A} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            <h3>Data Management</h3>
                            There's a ton of information out there and it can get hard to manage once you start
                            getting more and more. This class introduced the basics of data management, having us
                            use a common program to guide along the way (MySQL).
                            <br/><h5>-June 2021</h5>
                        </p>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={INF131} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            <h3>Human Computer Interaction</h3>
                            I am pretty interested in the front end of things, as well as how applications are
                            designed in such a manner where it would be most appealing to the user. In this class,
                            I learned all about it, and it was a nice little introduction to UI/UX.
                            <br/><h5>-June 2021</h5>
                        </p>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={CS117} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            <h3>Project in Computer Vision</h3>
                            This was labeled as a project course, and understandably so as I went in depth to learn
                            about the intricacies of translating an image to 3D spaces. The class introduced a variety
                            of topics, starting with the very basics to get an understanding of how this idea works.
                            And in the end of it all, I successfully created a model purely from images - one of my greatest
                            accomplishments.
                            <br/><h5>-June 2021</h5>
                        </p>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={aws} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p>
                            <h3>Project in Data and Web Applications</h3>
                            The official name of the project course I took over my final quarters in college
                            was called "Project in Data and Web Applications". It was one of the hardest yet fulfilling
                            courses I've ever taken because I had to create a full stack application alone. Handling
                            database interactions with Java (backend), using MySQL for data storage, and using javascript
                            to style my pages were just some of the many objectives of the course.
                            <br/><h5>- December 2021</h5>
                        </p>                  
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={snoutbout} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            <h3>Computer Game Development</h3>
                            It was from my Computer Game Development class, and it was actually an interesting one
                            considering my appreciation for games. What makes a game good boils down to a variety
                            of different things, and it was our job to do that - make a good game. However, with limited
                            time, we can only do so much! But I picked up a new language and would definitely
                            continue to develop this game.
                            <br/><h5>- December 2021</h5>
                        </p>                  
                    </div>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Classes