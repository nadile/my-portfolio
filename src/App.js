import React from 'react';
import Navbar from "./components/Navbar";
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
