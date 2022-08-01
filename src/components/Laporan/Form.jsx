import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Card from "../Card";
import { BASE_URL } from "../../config/config";

const Flaporan = ({ title, kategori, id }) => {
  const [judul, setJudul] = useState("");
  const [notlpn, setNoTlpn] = useState("");
  const [detail, setDetail] = useState("");
  const [file, setFile] = useState("");

  const MySwal = withReactContent(Swal);
  const token = ReactSession.get("token");

  useEffect(() => {
    if (id) {
      fetch(`${BASE_URL}pelaporan/${id}`, {
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
          setJudul(data.judul);
          setNoTlpn(data.notlpn);
          setDetail(data.detail);
          setFile(data.file);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("judul", judul);
    data.append("notlpn", notlpn);
    data.append("detail", detail);

    if (typeof file === "object") data.append("file", file);
    if (typeof file === "string") data.append("gambar", file);

    data.append("kategori", kategori);
    let url;

    if (id) {
      url = `${BASE_URL}pelaporan/${id}`;
    } else {
      url = `${BASE_URL}pelaporan/`;
    }

    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        token,
      },
      body: data,
    });

    const content = await rawResponse.json();

    if (!content["Server"]) {
      MySwal.fire({
        title: `Gagal tambah laporan ${kategori}`,
        text: "file harus gambar dan inputan tidak boleh ada yang kosong",
        icon: "error",
      });
      return;
    }

    const server = content["Server"][0];
    const { code, pesan } = server;

    if (code === "addLaporan_true" || code === "updateLaporan_true") {
      MySwal.fire({
        title: `Success`,
        text: pesan,
        icon: "success",
      });
      setJudul("");
      setNoTlpn("");
      setDetail("");
      setFile("");
      window.location.href = "/";
    }
  };

  return (
    <>
      <Card>
        <p>{title}</p>
        <div className="form-group my-3">
          <label for="judul">Judul Laporan</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Judul Laporan"
            onChange={(e) => setJudul(e.target.value)}
            value={judul}
          />
        </div>
        <div className="form-group my-3">
          <label for="no">No. Telepon</label>
          <input
            type="text"
            className="form-control"
            placeholder="No. Telepon Anda"
            onChange={(e) => setNoTlpn(e.target.value)}
            value={notlpn}
          />
        </div>
        <div className="form-group my-3">
          <label for="detail">Detail Pelaporan</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
            placeholder="Detail Pelaporan Anda"
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
          />
        </div>
        <div className="form-group my-3">
          <label for="bukti">Bukti Penemuan</label>
          <input
            type="file"
            className="form-control"
            placeholder="Bukti Gambar"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="d-flex float-end">
          <button className="btn btn-success mt-3" onClick={handleSubmit}>
            Kirim
          </button>
        </div>
      </Card>
    </>
  );
};

export default Flaporan;
