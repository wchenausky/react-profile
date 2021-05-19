import React from 'react';
import "./style.css";
import { Card, Container, Row, Col, Button} from 'react-bootstrap';

const Portfolio = () => {
  const homonymSite = 'https://wchenausky.github.io/project-1/';
  const homonymRepo = 'https://github.com/wchenausky/project-1'
  const empTracker = 'https://github.com/wchenausky/react-employee-tracker';
  const budgetRepo = 'https://github.com/wchenausky/budget_tracker';
  const budgetSite = 'https://peaceful-reaches-14139.herokuapp.com/';
  const fitnessSite = 'https://nameless-ravine-00093.herokuapp.com/';
  const fitnesstRepo = 'https://github.com/wchenausky/fitness_tracker';
  const noteSite = 'https://note-taker-wiliam.herokuapp.com/';
  const noteRepo = 'https://github.com/wchenausky/note_taker';
  const projectRepo = 'https://github.com/tkuebler12/ProjectTwo';
  
  return (
    <Container className="about-me mt-5 mb-5 p-1">
      <Row xs={4} lg={10}>
        <Col xs={12} lg={4}>
            <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px',}}>
              <Card.Img variant="top" src="../../../public/assets/pics/Homonym.png" />
              <Card.Body>
                <Card.Title>Homonym!</Card.Title>
                <Card.Text>
                  Group project, my team and I did that gives multiple meanings for a single word.
                </Card.Text>
                <Button className="m-2" variant="primary" onClick={() => window.open(homonymSite, "_blank")}>Deployed Site</Button>
                <Button className="m-2" variant="primary" onClick={() => window.open(homonymRepo, "_blank")}>GitHub Link</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={4}>
            <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px',}}>
              <Card.Img variant="top" src="./assets/images/MYDND.png" />
              <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <Card.Text>
                  Employee Tracker I created with react. It helps employers keep track of their employees information.
                </Card.Text>
                <Button className="m-2" variant="primary" onClick={() => window.open(empTracker, "_blank")}>GitHub Link</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={4}>
            <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px',}}>
              <Card.Img variant="top" src="./assets/images/Start_Page.png" />
              <Card.Body>
                <Card.Title>Budget Tracker</Card.Title>
                <Card.Text>
                A budget tracker that can be used on or off line. Users are able to track they money they are spending or recieving.
                </Card.Text>
                <Button className="m-2" variant="primary" onClick={() => window.open(budgetSite, "_blank")}>Deployed Site</Button>
                <Button className="m-2" variant="primary" onClick={() => window.open(budgetRepo, "_blank")}>GitHub Link</Button>
              </Card.Body>
            </Card>
        </Col>
      </Row>
      <Row xs={4} lg={10}>
        <Col xs={12} lg={4}>
            <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px',}}>
              <Card.Img variant="top" src="./assets/images/budget.png" />
              <Card.Body>
                <Card.Title>Fitness Tracker</Card.Title>
                <Card.Text>
                  A fitness tracker to help users keep track of their workouts.
                </Card.Text>
                <Button className="m-2" variant="primary" onClick={() => window.open(fitnessSite, "_blank")}>Deployed Site</Button>
                <Button className="m-2" variant="primary" onClick={() => window.open(fitnesstRepo, "_blank")}>GitHub Link</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={4}>
            <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px',}}>
              <Card.Img variant="top" src="./assets/images/note.png" />
              <Card.Body>
                <Card.Title>NoteTaker!</Card.Title>
                <Card.Text>
                 Note taker app where you can write and save notes.
                </Card.Text>
                <Button className="m-2" variant="primary" onClick={() => window.open(noteSite, "_blank")}>Deployed Site</Button>
                <Button className="m-2" variant="primary" onClick={() => window.open(noteRepo, "_blank")}>GitHub Link</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={4}>
            <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px',}}>
              <Card.Img variant="top" src="./assets/images/workout.png" />
              <Card.Body>
                <Card.Title>Knightly Collective Porject</Card.Title>
                <Card.Text>
                  My 2nd group project, working with a Pokemon API to pull cards that you collected and save them to keep track of your collection.
                </Card.Text>
                <Button className="m-2" variant="primary" onClick={() => window.open(projectRepo, "_blank")}>GitHub Link</Button>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;