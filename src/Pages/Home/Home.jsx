
import Navbar from "../../SharedComponents/Header/Navbar";
import Header from "../../SharedComponents/Header/Header";

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";

const Home = () => {
const healths = useLoaderData();
console.log(healths)
  return (
    <div className="">
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                healths.map(health => <Cart key={health.id} health={health}></Cart>)
            }
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
