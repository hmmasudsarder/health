import { Outlet } from "react-router-dom";
import Navbar from "../../SharedComponents/Header/Navbar";

const Home = () => {
  return (
    <div className="mx-auto">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
