import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Section'
import NavBarComp from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer'
import Search from './components/Search'
import LCoverCar from './components/LCoverCar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import Details from './components/Details';




function App() {
  return (
    <>
      <NavBarComp></NavBarComp>
      <Router>
        <Route path="/" exact render={(routerProps) => <Home {...routerProps}></Home>}></Route>
        <Route component={Details} path="/details/:movieId/:sectionTitle"/>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
