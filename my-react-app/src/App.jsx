import {useEffect, useState} from 'react'
import Papa from 'papaparse';
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Container, Nav, Row, Col, Form, Button, InputGroup, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home.jsx";
import Poetry from "./pages/Poetry.jsx"
import About from "./pages/About.jsx"
import Footer from "./components/Footer.jsx"

import logo from './images/logo.png';

import './App.css'

// For my Project, I decided that The Poetry Collective React Project will use Bootstrap for CSS! */}
// For Reference: React Bootstrap Guide (https://react-bootstrap.netlify.app/docs/getting-started/introduction) */}
// Multiple Pages Reference: https://github.com/JDScharf/tessa-site/blob/main/src/App.jsx */}
// Papaparse Reference and User Guide: https://www.papaparse.com/ */}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3">
            <Container className="align-items-center">
                <Navbar.Brand as={Link} to="/home" className="fw-bold text-decoration-underline d-flex align-items-center">
                    <img src={logo} width="40" height="40" className="align-top m-1" alt="Logo" />
                    <span className="ms-2" style={{fontFamily: "'Merriweather', serif"}}> The Poetry Collection </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home" style={{fontFamily: "'Merriweather', serif"}}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/poetry" style={{fontFamily: "'Merriweather', serif"}}>Poetry</Nav.Link>
                    <Nav.Link as={Link} to="/about" style={{fontFamily: "'Merriweather', serif"}}>About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/about" element={<About />} />
        </Routes>
    <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;