import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
