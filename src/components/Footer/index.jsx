import {
  FaWhatsapp,
  FaEnvelope,
  FaHome,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-main">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block"></div>

          <div>
            <a href="#!" className="me-4 text-reset">
              <FaWhatsapp />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaInstagram />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaFacebookF />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  SMK Annurmaniyah
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Features</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Barang Hilang
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Pelanggaran
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Visi dan Misi
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaHome className="me-3" />
                  Jalan. Dr. Cipto Mangunkusumo No. 62, Tangerang, Banten 15153
                </p>
                <p>
                  <FaEnvelope className="me-3" /> smk.annurmaniyah@yahoo.com
                </p>
                <p>
                  <FaWhatsapp className="me-3" /> (021) 7345-0713
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4 bg-footer">
          Copyright © 2022
          <a className="text-reset fw-bold mx-1" href="#!">
            SMK Yapera
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
