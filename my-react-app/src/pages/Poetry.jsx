import {useEffect, useState} from "react";
// Reference for "useEffect": https://react.dev/reference/react/useEffect (i.e. this is how i used an external system i think)
import Papa from "papaparse";
// Recommendation from Scharf for Email: use "PapaParse!"
import {Container, Button, Card, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PoetryAPI() {

// Reference for "useState": https://www.w3schools.com/react/react_usestate.asp + Downloaded IST 363 Class Presentation

  const [data, setData] = useState([]);
  const [randomRow, setRandomRow] = useState("");
  const [email, setEmail] = useState("");

// Reference for "useEffect": https://react.dev/reference/react/useEffect (i.e. this is how i used an external system) + import above!
  useEffect(() => {
    fetch("../PoetryFoundationData.csv")
// Res vs. Response vs. Result: https://developer.mozilla.org/en-US/docs/Web/API/Response/text
// Using PapaParse: https://www.papaparse.com/ !!! + CSV to JSON Configuration Options: https://www.papaparse.com/docs#csv-to-json
// Understand CSV to Text (even though this is for Python...): https://www.geeksforgeeks.org/python/response-text-python-requests/
      .then((res) => res.text())
      .then((csvText) => {
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        setData(result.data);
      });
  }, []);

// Understanding how to get the full "area" of intended file: https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array
  const pickRandomRow = () => {
    setRandomRow(data[Math.floor(Math.random() * data.length)]);
  };

// "e" + Event Notes: https://legacy.reactjs.org/docs/handling-events.html
  const handleSubmit = (e) => {
// "e.preventDefault: Prevent page reload when submitting the form (that way the poem stays on the screen!) + https://legacy.reactjs.org/docs/handling-events.html
  e.preventDefault();

  const r = randomRow;

// Open default email app with pre-filled subject and body + https://legacy.reactjs.org/docs/handling-events.html
  window.location.href =
// To prevent the error if there's a strange character or something in the subject or body of the email: https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp
    `mailto:${email}?subject=${encodeURIComponent(`Poem: ${r?.Title || ""}`)}&body=${encodeURIComponent(
// Because the CSV is a bit messed up, if something does not appear, the question mark allows the program to return the thing as undefined instead of as an error of some sort and the code does not load at all: https://www.codecademy.com/resources/docs/javascript/optional-chaining
      `${r?.Title || ""} ${r?.Poem || ""} — ${r?.Poet || ""}`
    )}`;
// Input in the email: https://help.cartstack.com/article/42-setemail
  setEmail("");
};

// Logical Operators Refresher from Earlier Lab: https://www.w3schools.com/js/js_operators.asp ("&&", specifically below)

  return (
    <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
      <Button
        className="m-3"
        style={{
          backgroundColor: "#c4ae20",
          color: "black",
          border: "#000",
        }}
        onClick={pickRandomRow}
      >
        Poetry Generator
      </Button>

      {randomRow && (
        <>
          <Card className="mt-3 mb-3 bodybackground">
            <Card.Body>
              <Card.Title>
                <strong>Title: {randomRow.Title}</strong>
              </Card.Title>
              <Card.Text>{randomRow.Poem}</Card.Text>
              <Card.Text>
                <strong>Poet: {randomRow.Poet}</strong>
              </Card.Text>
            </Card.Body>
          </Card>

          <p className="text-center mx-auto w-75">
            If you find yourself enchanted with a piece, enter your email below and the poem and its respective information will be sent to your email!
          </p>

          <Form onSubmit={handleSubmit} className="bg-dark p-4 w-75 mx-auto rounded-2 text-center">
            <Form.Group className="mb-1">
              <Form.Label className="d-block text-center my-auto mb-2" style={{color: "white", fontFamily: "'Merriweather', serif",}}>
                Your Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="yourname@example.com"
                required
                value={email}
// Changing input based on user input from the textbox field!! : https://www.w3schools.com/react/react_forms.asp + https://react.dev/reference/react-dom/components/input
                onChange={(e) => setEmail(e.target.value)}
                className="text-center"
              />
            </Form.Group>

            <Button type="submit" style={{ backgroundColor: "#c4ae20", color: "black", border: "#000", width: "100%"}}>
              Send Poem
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
}

export default function PoetryApp() {
  return (
    <>
      <Container className="bodybackground" style={{fontFamily: "'Merriweather', serif"}}>
        <h1 className="fw-bold mt-5">Welcome to the Poetry Page</h1>

        <p className="mt-5 fs-5">Welcome to the heart of <span className="fw-bold">The Poetry Collection</span>, where every visit brings you into conversation with a new voice, a new rhythm, a new way of seeing the world Here, poems are presented with care - complete with their title, content, and author — so you can explore them fully and at your own pace. Whether you're searching for inspiration, hoping to discover a poet you've never read before, are eager to react to a piece, or simply taking a moment to breathe with language, this page is designed to guide you through that experience. React, reflect, revisit, and let each poem meet you exactly where you are.</p>

        <h1 className="fw-bold mt-5">The Poetry Collection</h1>

        <p className="mt-5 fs-5 mb-3">To get started, simply press the "Poetry Generator" button. From there, you can continue to generate new poems! Please note, if a full poem does not appear or there appears to be a glitch, it has unfortunately an error within the CSV file that contains over 19,000 entries; please generate yourself a new poem!</p>
      </Container>

      <PoetryAPI />
    </>
  );
}