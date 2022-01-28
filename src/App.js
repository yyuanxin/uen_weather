import React from "react";
import NavBar from "./components/Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Container} from "react-bootstrap";

import Uen from "./UenPage";
import Weather from "./WeatherPage";
import Home from "./HomePage";


function App() {
  return (
    <Container fluid>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/uen' element={ <Uen/> } />
          <Route path='/weather' element={ <Weather/> } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
