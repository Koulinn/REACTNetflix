import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import Details from './components/Details';
import Shows from './components/Shows';




function App() {
  return (
    <>
      <Router>
        <NavBarComp></NavBarComp>
        <Route path="/" exact render={(routerProps) => <Home {...routerProps}></Home>}></Route>
        <Route component={Details} path="/details/:movieId/:sectionTitle"/>
        <Route path="/shows" exact render={() => <Shows genres={['comedy', 'adventure', 'romance', 'drama']}></Shows>}></Route>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
