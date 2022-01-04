import React from 'react'
import './Projects.css'

import SocialApp from '../../images/sa-application.png'
import CovidSim from '../../images/covidsim1.png'
import aws from '../../images/aws.jpg'
import eSports from '../../images/esports2.png'
import AlgoRacing from '../../images/algracing1.png'
import Tetris from '../../images/tetris.png'

import {Grid} from 'semantic-ui-react'

const devIconStyle = {
    fontSize: "8vw",
    marginLeft: "0.5rem"
};

function Projects () {
    return (
        <>
            <h1 className="projects-title">Past Works</h1>
            <Grid columns={3} doubling style={{margin: "0rem 3rem 0rem 3rem"}}>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={aws} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            The official name of the project course I took over my final quarters in college
                            was called "Project in Data and Web Applications". It was one of the hardest yet fulfilling
                            courses I've ever taken because I had to create a full stack application alone. Handling
                            database interactions with Java (backend), using MySQL for data storage, and using javascript
                            to style my pages were just some of the many objectives of the course.
                            <br/><h5>- December 2021</h5>
                        </p>
                        <hr/>
                        <div className="projects-additional-links">
                            No items to show!
                        </div>                        
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <div className="projects-feature-img">
                            <img src={Tetris} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        </div>
                        <p> 
                            Tetris is one of my favorite games. I thought it'd be a neat idea to try to code it and
                            also get back in touch with Python because I haven't really done much with the language recently.
                            There's a lot to add to make it better, so I see it as something I can always go back
                            and add to when I get the chance.
                            <br/><h5>- August 2021</h5>
                        </p>
                        <hr/>
                        <div className="projects-additional-links">
                            <a href="https://github.com/brianv212/tetris" target="_blank" rel="noreferrer">Repository</a>
                        </div>                        
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={SocialApp} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> As soon as I finished my class on databases, I knew it would be worth my time to 
                            continue doing something databse related by actually implementing it with an app.
                            Thinking that the best way to do this would be to create a social media app, I 
                            utilized mongoDB and React to create a functioning website that'd allow me to 
                            strengthen my understanding of databases, while also touching on full stack development.
                            <br/><h5>- July 2021</h5>
                        </p>
                        <hr/>
                        <div className="projects-additional-links">
                            <a href="https://github.com/brianv212/sa-server" target="_blank" rel="noreferrer">Repo 1</a>
                            <a href="https://github.com/brianv212/sa-client" target="_blank" rel="noreferrer">Repo 2</a>
                        </div>                        
                    </div>

                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={CovidSim} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> My friend came up to me and asked if I could teach him the basics of ReactJS, and having
                            been using the language for some time now, I thought it'd be an even better idea to just create
                            something together. Right after my finals this Winter quarter, we saw and signed up for Hack PSU
                            Spring 2021, with the only goal of having a good time, creating
                            <a href="https://devpost.com/software/sus-simulator" target="_blank" rel="noreferrer"> something</a> that could be an introduction
                            for my friend.
                            <br/><h5>- March 2021</h5>
                        </p>
                        <hr/>
                        <div className="projects-additional-links">
                            <a href="https://github.com/brianv212/covid-sim-1" target="_blank" rel="noreferrer">Repository</a>
                            <a href="https://kodykhuu.github.io/covid-sim" target="_blank" rel="noreferrer">Website</a>
                        </div>                        
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={eSports} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            As an avid eSports watcher, I find it a bit hard trying to
                            switch between different sites to get information on the latest
                            eSport events. Being able to combine information from some of the
                            most popular games was the only solution. Now users can sort by
                            past, present, and future games all while sorting information by
                            specific categories.<br/><br/>
                            This was more of a test of my ability to use an API for the first time with ReactJS, 
                            and it went well!
                            <br/><h5>- December 2020</h5>
                        </p>
                        <hr/>
                        <div className="projects-additional-links">
                            <a href="https://github.com/brianv212/eSportsTracker" target="_blank" rel="noreferrer">Repository</a>
                        </div>                        
                    </div>

                </Grid.Column>
                <Grid.Column>
                    <div className="projects-content">
                        <img src={AlgoRacing} alt="Covid-19 Simulator" className="projects-feature-img"/>
                        <p> 
                            The idea came to mind after a popular 
                            <a href="https://www.youtube.com/watch?v=kPRA0W1kECg" target="_blank" rel="noreferrer"> video </a>
                            (volume warning) on YouTube came around
                            where algorithms were visualized one by one, making funny sounds as they
                            were sorting. I thought it'd be a cooler idea to see two algorithms side
                            by side, racing each other to see which one finishes first. It tested my
                            knowledge on Big O time and other algorithm concepts.<br/><br/>
                            This was my first ever website, and looking back, I can definitely see what I could've
                            done better.
                            <br/><h5>- August 2020</h5>
                        </p>
                        <hr/>
                        <div className="projects-additional-links">
                            <a href="https://github.com/brianv212/algorithm_racing" target="_blank" rel="noreferrer">Repository</a>
                            <a href="https://brianv212.github.io/algorithm_racing" target="_blank" rel="noreferrer">Website</a>
                        </div>                        
                    </div>
                </Grid.Column>
            </Grid>
            <div className="projects-skills">
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "2rem", textAlign: "center"}}>
                    <div>
                        <p>Languages</p>
                        <i class="devicon-python-plain colored" style={devIconStyle}></i>
                        <i class="devicon-cplusplus-plain colored" style={devIconStyle}></i>
                        <i class="devicon-react-plain colored" style={devIconStyle}></i>
                        <i class="devicon-javascript-plain colored" style={devIconStyle}></i>
                    </div>
                    <div>
                        <p>Databases</p>
                        <i class="devicon-mongodb-plain colored" style={devIconStyle}></i>
                        <i class="devicon-firebase-plain colored" style={devIconStyle}></i>
                        <i class="devicon-mysql-plain colored" style={devIconStyle}></i>
                    </div>                    
                </div>

                <div style={{textAlign: "center", margin: "2rem 0rem 2rem 0rem"}}>
                    <p>Softwares</p>
                    <i class="devicon-vscode-plain colored" style={devIconStyle}></i>
                    <i class="devicon-pycharm-plain colored" style={devIconStyle}></i>
                    <i class="devicon-jupyter-plain colored" style={devIconStyle}></i>
                </div>
            </div>
        </>
    )
}

export default Projects


            // <div className="projects-pastworks">
            //     <div className="projects-feature">
            //         <img src={CovidSim} alt="Covid-19 Simulator"/>
            //         <p> My friend came up to me and asked if I could teach him the basics of ReactJS, and having
            //             been using the language for some time now, I thought it'd be an even better idea to just create
            //             something together. Right after my finals this Winter quarter, we saw and signed up for Hack PSU
            //             Spring 2021, with the only goal of having a good time, creating
            //             <a href="https://devpost.com/software/sus-simulator" target="_blank" rel="noreferrer"> something</a> that could be an introduction
            //             for my friend.
            //         </p>
            //         <h5>-March 2021</h5>
            //         <hr/>
            //         <div style={{margin: "0 1rem 1rem 1rem", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            //             <a href="https://github.com/brianv212/covid-sim-1" target="_blank" rel="noreferrer">Repository</a>
            //             <a href="https://kodykhuu.github.io/covid-sim" target="_blank" rel="noreferrer">Website</a>
            //         </div>
            //     </div>
            //     <div className="projects-feature">2</div>
            //     <div className="projects-feature">3</div>
            // </div>