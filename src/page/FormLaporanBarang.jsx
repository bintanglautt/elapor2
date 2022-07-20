import Navbar from "../components/Navbar";
import { Form } from "../components/Laporan";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const LaporanBarang = ({ title, kategori }) => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Navbar />
      <Form title={title} kategori={kategori} id={id} />
      <Footer />
    </>
  );
};

export default LaporanBarang;
