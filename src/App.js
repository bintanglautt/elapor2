import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactSession } from "react-client-session";

import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import FormLaporanBarang from "./page/FormLaporanBarang";
import FormLaporanPelanggaran from "./page/FormLaporanPelanggaran";
import ListLaporanPelanggaran from "./page/ListLaporanPelanggaran";
import ListLaporanBarang from "./page/ListLaporanBarang";

const App = () => {
  ReactSession.setStoreType("cookie");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/flaporanbarang"
            element={
              <FormLaporanBarang
                title={"Form Pelaporan Barang Hilang"}
                kategori={"barang hilang"}
              />
            }
          />
          <Route
            path="/flaporanpelanggaran"
            element={
              <FormLaporanPelanggaran
                title={"Form Pelaporan Pelanggaran"}
                kategori={"pelanggaran"}
              />
            }
          />

          <Route
            path="/flaporanbarang/:id"
            element={
              <FormLaporanBarang
                title={"Form Edit Pelaporan Barang Hilang"}
                kategori={"barang hilang"}
              />
            }
          />
          <Route
            path="/flaporanpelanggaran/:id"
            element={
              <FormLaporanPelanggaran
                title={"Form Edit Pelaporan Pelanggaran"}
                kategori={"pelanggaran"}
              />
            }
          />

          <Route
            path="/llaporanpelanggaran"
            element={
              <ListLaporanPelanggaran
                title={"List Pelaporan Pelanggaran"}
                kategori={"pelanggaran"}
              />
            }
          />
          <Route
            path="/llaporanbarang"
            element={
              <ListLaporanBarang
                title={"List Pelaporan Barang Hilang"}
                kategori={"barang hilang"}
              />
            }
          />

          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/register" element={<Register />} /> */}

          {/* <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
