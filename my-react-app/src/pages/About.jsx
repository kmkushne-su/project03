import {Container, Row, Col} from "react-bootstrap";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image6 from "../images/image6.png";
import logo from "../images/logo.png"; 
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";

function About() {
  return (
    <div>

      <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
        <p className="mt-5 fs-5">
          <span className="fw-bold">The Poetry Collection</span> was born from my own desire to reconnect with poetry--a form of art that once shaped my imagination and continues to ground me in moments of reflection.
        </p>
      </Container>

      <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
        <h1 className="fw-bold mt-5 mb-5">&#10051; The Past &#10051;</h1>
        <Row>
          <Col md={6}>
            <img
              className="border border-1 border-dark mb-3"
              src={image5}
              style={{width: "100%", height: "auto"}}
              alt="tree"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p className="fs-5">After drifting away from reading poems regularly, I wanted a space that would make rediscovering them feel exciting, accessible, and visually inspiring. Creating <span className="fw-bold">The Poetry Collection</span> became both a personal project and a creative challenge: a way to blend my love for design, technology, and language into something that encourages others to explore poetry alongside me.</p>
          </Col>
        </Row>
      </Container>

      <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
        <h1 className="fw-bold mt-5 mb-5">&#10086; The Present &#10086;</h1>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <p className="fs-5  mb-3">As I continue building and refining this space, my hope is that it becomes a welcoming place for anyone looking to fall back in love with poetry or discover it for the first time. I want it to feel like an open door - a place where curiosity is encouraged, where readers can explore at their own pace, and where poetry feels accessible rather than intimidating. Whether someone arrives with years of experience reading poems or is just beginning to dip their toes into the world of verse, I want ther to find something here that resonates.</p>
          </Col>
          <Col md={6}>
            <img
              className="border border-1 border-dark mb-3"
              src={image4}
              style={{width: "100%", height: "auto"}}
              alt="hills"
            />
          </Col>
        </Row>
      </Container>

      <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
        <h1 className="fw-bold mt-5 -mb-3">&#8226; The Poetry &#8226;</h1>
        <Row>
            <p className="mt-5 fs-5">I believe that the poetry in The Poetry Collection is able to speak for itself. I sincerely hope that it speaks to you.</p>
            <p className="fs-5 mb-5">Thank you for visiting my page; I hope to see you again soon!</p>

          <img
            className="mb-4 d-block mx-auto"
            src={logo}
            style={{width: "50%", height: "50%"}}
            alt="logo"
          />
        </Row>
      </Container>

    </div>
  );
}

export default About;