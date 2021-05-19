import React from 'react';
import "./style.css";
import { Container, Row, Col} from 'react-bootstrap';

const Content = () => {

  return (
    <Container className="about-me mt-5 p-5 text-white text-center">
      <Row xs={4} lg={10}>
        <Col xs={12} lg={12}>
          <h1 className="h1">William Chenausky</h1>
          <h2 className="h2">Email: <a href="mailto: williamchenausky@yahoo.com">williamchenausky@yahoo.com</a></h2>
          <h2 className="h2">Phone:<a href="tel:803-402-9771">(803)-402-9771</a></h2>
          <h2 className="h2">Résumé: <a href="../../../public/assets/Docs/william-resume.pdf" download><i className="material-icons medium">cloud_download</i></a></h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;