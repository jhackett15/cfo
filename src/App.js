import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';
import ServicesPage from './Components/Services/services';
import TheBasicsPage from './Components/TheBasics/thebasics';
import AboutPage from './Components/About/about';
import ContactPage from './Components/Contact/contact';
import SignInPage from './Components/SignIn/signin';







function App() {
  return (
    <div className="App" >
    <Navigation />
    <Route exact path="/" component={Container}/>
    <Route path="/thebasics" component={TheBasicsPage}/>
    <Route path="/services" component={ServicesPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/signin" component={SignInPage}/>
    <Footer />
     
    </div>
  );
}

export default App;
