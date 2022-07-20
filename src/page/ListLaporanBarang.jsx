import Navbar from "../components/Navbar";
import { List } from "../components/Laporan";
import Footer from "../components/Footer";

const ListLaporanBarang = ({ title, kategori }) => {
  return (
    <>
      <Navbar />
      <List title={title} kategori={kategori} />
      <Footer />
    </>
  );
};

export default ListLaporanBarang;
