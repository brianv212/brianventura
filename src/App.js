import './App.css';
import NavBar from './components/NavBarComponent/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

import Home from './components/HomeComponent/Home'
import Projects from './components/ProjectsComponent/Projects'
import Contact from './components/ContactComponent/Contact'
import Classes from './components/ClassesComponent/Classes'
import Footer from './components/Footer/Footer'

// import Comments from './components/CommentsPageComponent/Comments'


function App() {
  return (
    <div className="app-main">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/brianventura' element={<Home/>} />
          <Route path='/brianventura/projects' element={<Projects/>} />
          <Route path='/brianventura/classes' element={<Classes/>} />
          <Route path='/brianventura/contact' element={<Contact/>} />
          {/* <Route path="/comments" exact component={Comments}/> */}
        </Routes>  
        <Footer/>      
      </Router>
    </div>
  );
}

export default App;