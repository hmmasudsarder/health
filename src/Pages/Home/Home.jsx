
import Navbar from "../../SharedComponents/Header/Navbar";
import Header from "../../SharedComponents/Header/Header";

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import ExtraPage from "../ExtaraPage/ExtraPage";
import ExtraShort from "../ExtaraPage/ExtraShort";

const Home = () => {
const healths = useLoaderData();
  return (
    <div className="">
      <div >
        <Navbar></Navbar>
        <Header></Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="flip-right">
            {
                healths.map(health => <Cart key={health.id} health={health}></Cart>)
            }
        </div>
        <ExtraPage></ExtraPage>
        <ExtraShort></ExtraShort>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
