import {useEffect, useState} from 'react'
import Papa from 'papaparse';
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Container, Nav, Row, Col, Form, Button, InputGroup, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image6 from '../images/image6.png';

function Home () {
    return (
    <div>
        <div>
            <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
        <p className="mt-4 fs-5"><span className="fw-bold">The Poetry Collection</span> engages with a simple promise: to make discovering poetry feel vivid, personal, and beautifully immersive. This is a space where poems aren't just read — they're experienced. Every visit brings a fresh selection of poets and pieces pulled from a rich poetry database, offering readers new voices to explore and unexpected lines to spark inspiration.</p>
            </Container>
        </div>
        <div>
            <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
                <h1 className="fw-bold mt-5 mb-5">&#9880; The Poem &#9880;</h1>
            <Row>
                <Col md={6}>
                    <img className="border border-1 border-dark  mb-3" src={image1} style={{width: '100%', height: 'auto'}} alt="fog rising from the mountains"></img>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <p className="fs-5">In our busy world, engaging with poetry on <span className="fw-bold">The Poetry Collection</span> invites us to slow down, reflect, and connect more deeply with our own emotions and the experiences of others. It expands our perspective by introducing new voices and ideas, while also giving language to feelings that are often hard to express. Whether it offers comfort, challenge, or inspiration, poetry encourages creativity and curiosity, making each encounter a meaningful moment of discovery.</p>
                </Col>
            </Row>
            </Container>
        </div>
        <div>
            <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
                <h1 className="fw-bold mt-5 mb-5">&#10047; The Reaction &#10047;</h1>
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <p className="fs-5">On <span className="fw-bold">The Poetry Collection</span>, engaging with a poem doesn't end at reading it — you can respond to it in a way that feels personal and expressive. Each poem invites you to share your immediate emotional response, whether it moved you, surprised you, or sparked inspiration. This helps create a more interactive experience, turning passive reading into active participation.</p>                </Col>
                <Col md={6}>
                    <img className="border border-1 border-dark mb-3" src={image2} style={{width: '100%', height: 'auto'}} alt="flourishing pink tree"></img>
                </Col>
            </Row>
            </Container>
        </div>
        <div>
            <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
                <h1 className="fw-bold mt-5 mb-5">&#10048; The Self &#10048;</h1>
            <Row>
                <Col md={6}>
                    <img className="border border-1 border-dark mb-3" src={image6} style={{width: '100%', height: 'auto'}} alt="a Monet postcard with a background of a Monet-esque landscape"></img>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <p className="fs-5">When a poem truly speaks to you, <span className="fw-bold">The Poetry Collection</span> gives you a way to carry that feeling forward. With a single click, you can send your favorite poem — along with its title, author, and any additional details — directly to whatever email you would like! It’s a meaningful way to celebrate the poems that resonate most deeply and turn your connection with them into something beautifully tangible and memorable.</p>                
                </Col>
            </Row>
            </Container>
        </div>
    </div>
    );
}

export default Home;