import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "../Image";

const Welcome = () => {
  return (
    <div className="jumbotron p-5 h-75">
      <Container>
        <Row>
          <Col md={6}>
            <div className="d-grid gap-5">
              <p></p>
              <p className="display-5 mt-5">
                Website For Reporting <br /> Lost Goods And Violations <br />{" "}
                SMK An - Nurmaniyah
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image
              src="assets/images/header.png"
              alt="header"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
