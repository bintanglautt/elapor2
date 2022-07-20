import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import Card from "../Card";
import { BASE_URL } from "../../config/config";

const Listlaporan = ({ title, kategori }) => {
  const [pelaporan, setPelaporan] = useState([]);

  useEffect(() => {
    const token = ReactSession.get("token");

    fetch(`${BASE_URL}pelaporan`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        token,
      },
    })
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        const server = res["Server"][0];
        const { data } = server;

        setPelaporan(data);
      });
  }, []);

  return (
    <>
      <Card>
        <p>{title}</p>
        {pelaporan.map((v, i) => {
          if (v.kategori === kategori) {
            return (
              <div className="row no-gutters my-3 ">
                <div className="col-auto">
                  <img
                    src={v.file}
                    className="img-fluid mb-4"
                    alt=""
                    width="250px"
                    height="350px"
                  />
                </div>
                <div className="col">
                  <div className="card-block px-2">
                    <p className="card-text">
                      <table>
                        <tr>
                          <td className="fw-bold">Judul Laporan</td>
                          <td>:</td>
                          <td>{v.judul}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Nama</td>
                          <td>:</td>
                          <td>{v.nama}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">No. Telepon</td>
                          <td>:</td>
                          <td>{v.notlpn}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Detail Pelaporan</td>
                          <td>:</td>
                          <td>{v.detail}</td>
                        </tr>
                      </table>
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </Card>
    </>
  );
};

export default Listlaporan;
