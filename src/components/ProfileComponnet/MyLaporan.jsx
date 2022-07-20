import Accordion from "react-bootstrap/Accordion";
import ListLaporan from "./ListLaporan";

const MyLaporan = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Barang Hilang</Accordion.Header>
          <Accordion.Body>
            <ListLaporan kategori={"barang hilang"} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pelanggaran</Accordion.Header>
          <Accordion.Body>
            <ListLaporan kategori={"pelanggaran"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default MyLaporan;
