import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Section'
import NavBarComp from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer'
import Search from './components/Search'
import LCoverCar from './components/LCoverCar';



function App() {
  return (
    <>
      <NavBarComp></NavBarComp>
      <LCoverCar query1="marvel" query2="batman" query3="toy story"></LCoverCar>
      <Search></Search>
      <Section title="Harry Potter"></Section>
      <Section title="Lord of the Rings"></Section>
      <Section title="Horror"></Section>
      <Footer></Footer>
    </>
  );
}

export default App;
