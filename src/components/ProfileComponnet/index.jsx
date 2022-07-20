import { ReactSession } from "react-client-session";
import { useState, useEffect } from "react";

import Card from "../Card";
import Image from "../Image";
import MyLaporan from "./MyLaporan";

const ProfileComponnet = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const data = JSON.parse(atob(ReactSession.get("data")));
    const { nama } = data;

    setName(nama);
  }, [name]);

  return (
    <>
      <Card>
        <p className="text-center fs-2 mb-0 text-uppercase">Lihat Profile</p>
        <Image
          src={"assets/images/users.png"}
          alt="users"
          style={{ width: "25%", height: "35%" }}
          className="mx-auto d-block"
        />
        <p className="text-center fs-3">{name}</p>
        <hr />
        <MyLaporan />
      </Card>
    </>
  );
};

export default ProfileComponnet;
