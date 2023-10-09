import Navbar from "../../SharedComponents/Header/Navbar";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";

const Spicial = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <h3 className="text-center text-6xl">Our Client</h3>
                <Marquee>
                <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/br8wW3d/Apollo-Hospitals-Logo-svg.png" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            apollo hospital
            </h4>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            is company sevices very good employee behaviour is very friendly
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            
            </p>
          </div>

        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/mSFRk6G/united-hospital-ltd-logo.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              United Hospital
            </h4>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              They do the events very well and complete the events very timely thanks
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              
            </p>
          </div>
          
        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/873QJ2R/download.png" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
             SQUARE Hospital
            </h4>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              is company sevices very good employee behaviour is very friendly
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              
            </p>
          </div>
          
        </div>
                </Marquee>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Spicial;