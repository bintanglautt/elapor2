import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BASE_URL } from "../../config/config";

const ListLaporan = ({ kategori }) => {
  const [laporan, setLaporan] = useState([]);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch(`${BASE_URL}user/myLaporan`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: ReactSession.get("token"),
      },
    })
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        const server = res["Server"][0];
        const { data } = server;
        setLaporan(data);
      });
  }, []);

  const handleDelete = (id) => {
    MySwal.fire({
      title: "Apakah kamu ingin manghapus?",
      text: "Data ini tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`${BASE_URL}pelaporan/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: ReactSession.get("token"),
          },
        });

        const content = await res.json();
        const server = content["Server"][0];

        const { code, pesan } = server;

        if (code === "deleteLaporan_true")
          return Swal.fire("Deleted!", pesan, "success").then(() =>
            window.location.reload()
          );

        return Swal.fire("Delete Error!", pesan, "error").then(() =>
          window.location.reload()
        );
      }
    });
  };

  return (
    <>
      {laporan.map((v, i) => {
        if (v.kategori === kategori) {
          return (
            <div className="row no-gutters my-3">
              <div className="col-auto">
                <img
                  src={v.file}
                  className="img-fluid mb-4"
                  alt=""
                  width="150px"
                  height="150px"
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
                        <td className="fw-bold">No. Telepon</td>
                        <td>:</td>
                        <td>{v.notlpn}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Detail Pelaporan</td>
                        <td>:</td>
                        <td>{v.detail}</td>
                      </tr>
                      <tr className="ms-5">
                        <td className="mr-auto">
                          <Link
                            to={`/flaporan${
                              kategori === "barang hilang"
                                ? "barang"
                                : "pelanggaran"
                            }/${v.id}`}
                            className="btn btn-success mx-1 my-1"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger mx-1 my-1"
                            onClick={() => handleDelete(v.id)}
                          >
                            Hapus
                          </button>
                        </td>
                        <td></td>
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
    </>
  );
};

export default ListLaporan;
