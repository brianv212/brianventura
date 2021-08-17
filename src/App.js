import './App.css';
import NavBar from './components/NavBarComponent/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

import Home from './components/HomeComponent/Home'
import Projects from './components/ProjectsComponent/Projects'
// import Contact from './components/ContactComponent/Contact'
import Classes from './components/ClassesComponent/Classes'
import Footer from './components/Footer/Footer'

// import Comments from './components/CommentsPageComponent/Comments'


function App() {
  return (
    <div className="app-main">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/brianventura" exact component={Home}/>
          <Route path="/brianventura/projects" exact component={Projects}/>
          {/* <Route path="/contact" exact component={Contact}/> */}
          <Route path="/brianventura/classes" exact component={Classes}/>
          {/* <Route path="/comments" exact component={Comments}/> */}
        </Switch>  
        <Footer/>      
      </Router>
    </div>
  );
}

export default App;
