import Navbar from "react-bootstrap/Navbar";
import Menu from "./menu";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-main">
      <Menu />
    </Navbar>
  );
};

export default Navbars;
