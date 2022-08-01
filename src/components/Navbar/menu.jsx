import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactSession } from "react-client-session";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Image from "../Image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BASE_URL } from "../../config/config";

const Menu = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    try {
      const data = ReactSession.get("data");
      const tokenCookie = ReactSession.get("token");

      let dataUser = JSON.parse(atob(data));

      setUser(dataUser);
      setToken(tokenCookie);
    } catch (error) {
      try {
        const tokenCookie = ReactSession.get("token");
        setToken(tokenCookie);

        if (Object.keys(token).length >= 1 || Object.keys(user).length >= 1) {
          fetch(`${BASE_URL}user/getMe`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              token,
            },
          })
            .then((rawResponse) => rawResponse.json())
            .then((res) => {
              const server = res["Server"][0];
              const { data } = server;
              ReactSession.set("data", btoa(JSON.stringify(data)));
              setUser(data);
            });
        }
      } catch (error) {
        let lokasi = window.location.pathname;

        if (
          lokasi === "/flaporanbarang" ||
          lokasi === "/flaporanpelanggaran" ||
          lokasi === "/llaporanbarang" ||
          lokasi === "/llaporanpelanggaran" ||
          lokasi === "/profile"
        )
          return (window.location.href = "/");
      }
    }
  }, [token]);

  const handleLogout = () => {
    fetch(`${BASE_URL}auth/logout`, {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        const server = res["Server"][0];
        const { code, pesan } = server;

        if (code === "logout_false")
          return MySwal.fire({
            title: "Gagal Logout",
            text: pesan,
            icon: "error",
          });

        ReactSession.remove("data");
        ReactSession.remove("token");
        window.location.reload();
      });
  };

  const liatPelanggaran = () =>
    user["level"] === "admin" || user["level"] === "guru";

  const buatPelanggaran = () => user["level"] === "siswa";

  const liatBarangHilang = () =>
    user["level"] === "admin" || user["level"] === "siswa";

  const buatBarangHilang = () => user["level"] === "siswa";

  return (
    <Container>
      <Link to={"/"} className="navbar-brand">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width="75px"
          height="75px"
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
          {/* <Link to={"/about"} className="nav-link">
            About
          </Link>
          <Link to={"/contact"} className="nav-link">
            Contact
          </Link> */}
          {Object.keys(user).length >= 1 && (
            <>
              {(buatPelanggaran() || liatPelanggaran()) && (
                <NavDropdown title="Laporan Pelanggaran" id="lpelanggaran">
                  {buatPelanggaran() && (
                    <Link
                      to={"/flaporanpelanggaran"}
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      Form Pelanggaran
                    </Link>
                  )}
                  {liatPelanggaran() && (
                    <Link
                      to={"/llaporanpelanggaran"}
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      List Laporan Pelanggaran
                    </Link>
                  )}
                </NavDropdown>
              )}
              {(buatBarangHilang() || liatBarangHilang()) && (
                <NavDropdown title="Laporan Barang Hilang" id="lbarang">
                  {buatBarangHilang() && (
                    <Link
                      to={"/flaporanbarang"}
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      Form Barang Hilang/Penemuan Barang
                    </Link>
                  )}
                  {liatBarangHilang() && (
                    <Link
                      to={"/llaporanbarang"}
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      List Barang Hilang
                    </Link>
                  )}
                </NavDropdown>
              )}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {Object.keys(user).length === 0 && (
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to={"/login"} className="nav-link">
              <FaUser /> Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      )}

      {Object.keys(user).length >= 1 && (
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title={`${user["nama"]}`} id="profile">
              {buatPelanggaran() && (
                <Link
                  to={"/profile"}
                  data-rr-ui-dropdown-item=""
                  className="dropdown-item"
                >
                  Profile
                </Link>
              )}

              <Link
                to={"#"}
                data-rr-ui-dropdown-item=""
                className="dropdown-item"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      )}
    </Container>
  );
};

export default Menu;
