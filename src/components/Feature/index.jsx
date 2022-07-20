import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "../Image";

const Feature = () => {
  return (
    <div className="jumbotron p-5 h-75">
      <Container className="text-center">
        <h1 className="display-5">3 Our Features</h1>
        <p className="lead">available features are violations and reporting</p>
        <Row>
          <Col md={4} className="my-3">
            <Image
              src={"assets/images/barang.png"}
              alt="header"
              style={{ width: "25%", height: "35%" }}
            />
            <div className="d-grid gap-1">
              <p className="fs-3">Barang Hilang</p>
              <p className="lead">
                It can easily help you to find your lost items
              </p>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <Image
              src={"assets/images/pelanggaran.png"}
              alt="Pelanggaran"
              style={{ width: "25%", height: "35%" }}
            />
            <div className="d-grid gap-1">
              <p className="fs-3">Pelanggaran</p>
              <p className="lead">
                It can easily help you to report a student who misbehaves in
                school
              </p>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <Image
              src={"assets/images/laporan.png"}
              alt="Laporan"
              style={{ width: "25%", height: "35%" }}
            />
            <div className="d-grid gap-1">
              <p className="fs-3">Daftar Laporan</p>
              <p className="lead">
                It can easily help you to see a list of reports containing
                violations or missing items
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feature;
