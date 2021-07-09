import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Section'
import NavBarComp from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer'
import Search from './components/Search'



function App() {
  return (
    <>
      <NavBarComp></NavBarComp>
      <Search></Search>
      <Section title="Harry Potter"></Section>
      <Section title="Lord of the Rings"></Section>
      <Section title="Horror"></Section>
      <Footer></Footer>
    </>
  );
}

export default App;
