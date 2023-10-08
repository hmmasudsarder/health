import Marquee from "react-fast-marquee";

const ExtraShort = () => {
  return (
    <div>
        <h3 className="text-4xl text-center font-extrabold mt-4">Our Clients Review</h3>
      <Marquee>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/VgTrXvN/images-1.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Natalie Paisley
            </h4>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            is company sevices very good employee behaviour is very friendly
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              admin / SR
            </p>
          </div>

        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/rxLM56X/800px-COLOURBOX4661529.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Natalie Paisley
            </h4>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              They do the events very well and complete the events very timely thanks
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              CEO / Co-Founder
            </p>
          </div>
          
        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/j69g2Zf/images-2.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Natalie Paisley
            </h4>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              is company sevices very good employee behaviour is very friendly
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Product Manager
            </p>
          </div>
          
        </div>
      </Marquee>
    </div>
  );
};

export default ExtraShort;
